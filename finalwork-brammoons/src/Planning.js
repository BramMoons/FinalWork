import React from "react";
import axios from 'axios';

class Planning extends React.Component {

    constructor(props) {
        super(props);

        this.state = { wandeling: [] }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        axios.put(process.env.REACT_APP_API_URL + "/wandelingen/" + this.state.wandeling);
    }

    handleChange(event) {
        console.log("state in handleChange", this.state);
        let wandeling = this.state.wandeling;
        let state = {};

        switch(event.target.id) {
            case "Naam":
                wandeling.naam = event.target.value;
                break;
            case "lengte":
                wandeling.lengte = event.target.value;
                break;
            case "Straat":
                wandeling.Straat = event.target.value;
                break;
            case "StraatNr":
                wandeling.StraatNr = event.target.value;
                break;
            case "Postcode":
                wandeling.Postcode = event.target.value;
                break;
            case "Gemeente":
                wandeling.Gemeente = event.target.value;
                break;
            default:
                //can be ignored
        }
        state.wandeling = wandeling;

        this.setState(state);
    }

    render() {
        return(
            <div id="wandelingForm">
                <p>Dit is de Plannings pagina.</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Naam">Naam van de wandeling</label>
                    <input type="text" id="Naam" placeholder="Naam" onChange={this.handleChange}/>
                    <br></br>
                    <label htmlFor="lengte">Lengte van de wandeling</label>
                    <input type="text" id="lengte" placeholder="lengte" onChange={this.handleChange}/>
                    <br></br>
                    <label htmlFor="Straat">Straat naam</label>
                    <input type="text" id="Straat" placeholder="Straat" onChange={this.handleChange}/>
                    <br></br>
                    <label htmlFor="StraatNr">Straat nummer</label>
                    <input type="number" id="StraatNr" placeholder="StraatNr" onChange={this.handleChange}/>
                    <br></br>
                    <label htmlFor="Postcode">Postcode</label>
                    <input type="number" id="Postcode" placeholder="Postcode" onChange={this.handleChange}/>
                    <br></br>
                    <label htmlFor="Gemeente">Gemeente</label>
                    <input type="text" id="Gemeente" placeholder="Gemeente" onChange={this.handleChange}/>
                    <br></br>
                    <input type="submit" value="Verzenden" />
                </form>
            </div>
        );
    }

}

export default Planning;