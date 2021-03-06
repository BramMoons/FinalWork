import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { ReactAgenda , ReactAgendaCtrl, guid , Modal } from 'react-agenda';

var now = new Date();

var colors= {
    'color-1':"rgba(102, 195, 131 , 1)" ,
    "color-2":"rgba(242, 177, 52, 1)" 
}


var items = [
    {
        _id           : guid(),
        name          : 'Wandeling Dilbeek, 15km',
        startDateTime : new Date("2020", "6", "20", 10),
        endDateTime   : new Date("2020", "6", "20", 17, 0),
        classes       : 'color-1 color-4'
    },
    {
        _id           : guid(),
        name          : 'Wandelig van bruegel, 10km',
        startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 11, 0),
        endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 13, 0),
        classes       : 'color-2'
    }
];

export default class Agenda extends Component {
    constructor(props){
        super(props);

        this.state = {
            items:[],
            selected:[],
            cellHeight:(60 / 4),
            showModal:false,
            rowsPerHour:3,
            numberOfDays:7,
            startDate: new Date()
        }

        this.handleRangeSelection = this.handleRangeSelection.bind(this)
        this.handleItemEdit = this.handleItemEdit.bind(this)
        this.zoomIn = this.zoomIn.bind(this)
        this.zoomOut = this.zoomOut.bind(this)
        this._openModal = this._openModal.bind(this)
        this._closeModal = this._closeModal.bind(this)
        this.addNewEvent = this.addNewEvent.bind(this)
        this.removeEvent = this.removeEvent.bind(this)
        this.editEvent = this.editEvent.bind(this)
        this.changeView = this.changeView.bind(this)
        this.handleCellSelection = this.handleCellSelection.bind(this)

    }

    componentDidMount(){
        this.setState({items:items})
        axios.get(process.env.REACT_APP_API_URL + "/wandelingen/GetAll")
        .then((this.parseResponse.bind(this)));
    }

    parseResponse(response) {
        console.log("axios response: ",response);
        let rows = [];
        rows = response.data;
        this.setState({items: rows});
    }

    componentWillReceiveProps(next , last){
        if(next.items){
            this.setState({items:next.items})
        }
    }

    handleItemEdit(item, openModal) {
        if(item && openModal === true){
            this.setState({selected:[item] })
            return this._openModal();
        }
    }

    handleCellSelection(item, openModal) {
        if(this.state.selected && this.state.selected[0] === item){
            return  this._openModal();
        }
        this.setState({selected:[item] })
    }

    zoomIn(){
        var num = this.state.cellHeight + 15
        this.setState({cellHeight:num})
    }

    zoomOut(){
        var num = this.state.cellHeight - 15
        this.setState({cellHeight:num})
    }


    handleDateRangeChange (startDate, endDate) {
        this.setState({startDate:startDate })
    }

    handleRangeSelection (selected) {
        this.setState({selected:selected , showCtrl:true})
        this._openModal();
    }

    _openModal(){
        this.setState({showModal:true})
    }

    _closeModal(e){
        if(e){
            e.stopPropagation();
            e.preventDefault();
        }
        this.setState({showModal:false})
    }

    handleItemChange(items , item){
        this.setState({items:items})
    }

    handleItemSize(items , item){
        this.setState({items:items})
    }

    removeEvent(items , item){
        this.setState({ items:items});
    }

    addNewEvent (items , newItems){
        this.setState({showModal:false ,selected:[] , items:items});
        this._closeModal();
    }

    editEvent (items , item){
        this.setState({showModal:false ,selected:[] , items:items});
        this._closeModal();
    }

    changeView (days , event ){
        this.setState({numberOfDays:days})
    }


    render() {

        var AgendaItem = function(props){
            console.log( ' item component props' , props)
            return <div style={{display:'block', position:'absolute' , background:'#FFF'}}>{props.item.name} <button onClick={()=> props.edit(props.item)}>Edit </button></div>
        }

        return (

            <div className="content-expanded ">
                <h1>Agenda</h1>

                <div className="control-buttons">
                    <button  className="button-control" onClick={this.zoomIn}> <i className="zoom-plus-icon"></i> </button>
                    <button  className="button-control" onClick={this.zoomOut}> <i className="zoom-minus-icon"></i> </button>
                    <button  className="button-control" onClick={this._openModal}> <i className="schedule-icon"></i> </button>
                    <button  className="button-control" onClick={this.changeView.bind(null , 7)}> {moment.duration(7, "days").humanize()}  </button>
                    <button  className="button-control" onClick={this.changeView.bind(null , 4)}> {moment.duration(4, "days").humanize()}  </button>
                    <button  className="button-control" onClick={this.changeView.bind(null , 3)}> {moment.duration(3, "days").humanize()}  </button>
                    <button  className="button-control" onClick={this.changeView.bind(null , 1)}> {moment.duration(1, "day").humanize()} </button>
                </div>
                <ReactAgenda
                    minDate={new Date(now.getFullYear(), now.getMonth()-3)}
                    maxDate={new Date(now.getFullYear(), now.getMonth()+3)}
                    startDate={this.state.startDate}
                    startAtTime={6}
                    endAtTime={18}
                    cellHeight={this.state.cellHeight}
                    items={this.state.items}
                    numberOfDays={this.state.numberOfDays}
                    headFormat={"ddd DD MMM"}
                    rowsPerHour={this.state.rowsPerHour}
                    itemColors={colors}
                    helper={true}
                    //itemComponent={AgendaItem}
                    view="calendar"
                    autoScale={false}
                    fixedHeader={true}
                    onRangeSelection={this.handleRangeSelection.bind(this)}
                    onChangeEvent={this.handleItemChange.bind(this)}
                    onChangeDuration={this.handleItemSize.bind(this)}
                    onItemEdit={this.handleItemEdit.bind(this)}
                    onCellSelect={this.handleCellSelection.bind(this)}
                    onItemRemove={this.removeEvent.bind(this)}
                    onDateRangeChange={this.handleDateRangeChange.bind(this)}
                />
                {this.state.showModal? <Modal clickOutside={this._closeModal} >
                    <div className="modal-content">
                        <ReactAgendaCtrl items={this.state.items} itemColors={colors} selectedCells={this.state.selected} Addnew={this.addNewEvent} edit={this.editEvent}  />
                    </div>
                </Modal>:''}
            </div>
        );
    }
}