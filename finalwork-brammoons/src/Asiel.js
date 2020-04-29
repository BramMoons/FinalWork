import React from 'react';
import axios from 'axios';
import ReactDataGrid from 'react-data-grid';

class Asiel extends React.Component {

    constructor(props) {
        super(props);

        let defaultColumnProperties = {
            sotable: true,
        }

        this._columns = [
            {
                key: "id",
                name: "ID",
            },{
                key: "naam",
                name: "Naam",
            },{
                key: "dieren",
                name: "Dieren",
            },{
                key: "straat",
                name: "Straat",
            },{
                key: "straatNr",
                name: "Straat nummer",
            },{
                key: "postcode",
                name: "Postcode",
            },{
                key: "gemeente",
                name: "Gemeente",
            },{
                key: "foto",
                name: "Foto",
            }
        ].map(c => ({ ...c, ...defaultColumnProperties }));

        this.state = { asiel: [] };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get(process.env.REACT_APP_API_URL + "/Asiel/GetAll")
            .then(this.parseResponse.bind(this));
    }

    parseResponse(response) {
        let data = [];
        data = response.data;
        this.setState({ asiel: data });
    }

    render() {
        return (
            <div>
                <ReactDataGrid

                />
            </div>
        );
    }
}

export default Asiel;