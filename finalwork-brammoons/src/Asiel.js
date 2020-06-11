import React from 'react';
import ReactDataGrid from 'react-data-grid';
import axios from 'axios';

class Asiel extends React.Component {
    
    constructor(props) {
        super(props);
        let _columns;

        let defaultColumnProperties = {
            sortable: false,
        }

        this._columns = [
            {
                key: "asielId",
                name: "ID",
            },
            {
                key: "naam",
                name: "Naam",
            },
            {
                key: "dieren",
                name: "Dieren",
            },
            {
                key: "straat",
                name: "Straat",
            },
            {
                key: "straatNr",
                name: "Straat nummer",
            },
            {
                key: "postcode",
                name: "Postcode",
            },
            {
                key: "gemeente",
                name: "Gemeente",
            },
            {
                key: "photoPath",
                name: "foto",
            }
        ].map(c => ({ ...c, ...defaultColumnProperties }));

        this.state = { _columns, asielen: [] }
        this.getData = this.getData.bind(this);

    }

    componentDidMount() {
        this.getData();
        axios.GET(process.env.REACT_APP_API_URL +"/Dier/getByKleur"+this.state.mens.kleur)
            .then(this.parseResponse.bind(this));
    }

    parseResponse(response) {
        console.log("axios response: ",response);
        let rows = [];
        rows = response.data;
        this.setState({asielen: rows});
    }

    getData() {
        let data = [];
        for (let i = 0; i < 10; i++) {
            data[i].asielId = i;
            data[i].naam = "asiel" + i;
            data[i].dieren = "honden, katten";
            data[i].straat = "schavolliestraat";
            data[i].straatNr = i;
            data[i].postcode = "1755";
            data[i].gemeente = "gooik";
            data[i].photoPath = "/idfe.jps"
        }
        this.setData({ asielen: data });
    }

    rowGetter = i => {
        return this.state.asielen[i];
    }

    render() {
        return(
            <div>
                <h1>Alle asielen</h1>
                <ReactDataGrid
                    rowkey = "asielId"
                    columns = {this._columns}
                    rowGetter = {this.rowGetter}
                    rowsCount = {this.state.asielen.length}
                    minHeight = {700}
                    minWidth = {2000}
                />
            </div>
        );
    }

}

export default Asiel;