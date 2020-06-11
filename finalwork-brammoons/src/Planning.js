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
            case "lengte":
                wandeling.lengte = event.target.value;
                break;
            case "startUur":
                wandeling.startUur = event.target.value;
                break;
            case "stopUur":
                wandeling.stopUur = event.target.value;
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
            case "Datum":
                wandeling.Datum = event.target.value;
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
                <h1>Plan je wandeling</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Naam">Naam van de wandeling</label>
                    <input type="text" id="Naam" placeholder="Naam"/>
                    <br></br>
                    <label htmlFor="lengte">Lengte van de wandeling</label>
                    <input type="text" id="lengte" placeholder="lengte" onChange={this.handleChange}/>
                    <br></br>
                    <label htmlFor="Straat">Straat naam</label>
                    <input type="text" id="Straat" placeholder="Straat" onChange={this.handleChange}/>
                    <br></br>
                    <label htmlFor="startUur">Start uur van de wandeling</label>
                    <input type="number" id="startUur" placeholder="startuur" onChange={this.handleChange}/>
                    <br></br>
                    <label htmlFor="stopUur">Einde van de wandelingen</label>
                    <input type="number" id="stopUur" placeholder="stopUur" onChange={this.handleChange}/>
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
                    <label htmlFor="Datum">Datum</label>
                    <input type="date" id="Datum" placeholder="Datum" onChange={this.handleChange} />
                    <br></br>
                    <input type="submit" value="Verzenden" />
                </form>
            </div>
        );
    }

}

export default Planning;