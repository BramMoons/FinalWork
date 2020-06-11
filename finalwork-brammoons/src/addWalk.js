import React from 'react';
import axios from 'axios';

class AddWalk extends React.Component {

    constructor(props) {
        super(props);
        let walk= {
            "lengte": 5,
            "startuur": 10,
            "stopuur": 16,
            "straat": "Schavollie",
            "straatnr": 44,
            "postcode": 1755,
            "gemeente": "Gooik"
        };
        let dier;
        this.state={walk, dier};
    }

    handleSubmit() {
        axios.put(process.env.REACT_APP_API_URL+"/Wandeling/voegToe/"+this.state.dier);
    }

    handleChange(event) {
        let walk = this.state.walk;
		let wandeling = this.state.walk;
		switch(event.target.id){
			case "lengte":
				wandeling.lengte = event.target.value;
				break;
			case "startuur":
				wandeling.startuur = event.target.value;
				break;
			case "stopuur":
				wandeling.stopuur = event.target.value;
				break;
			case "straat":
				wandeling.straat = event.target.value;
                break;
            case "straatnr":
                wandeling.straatnr = event.target.value;
                break;
            case "postcode":
                wandeling.postcode = event.target.value;
                break;
            case "gemeente":
                wandeling.gemeente = event.target.value;
                break;
			default:
				// Can be ignored
		}
		
		this.setState(walk);
	}

    render() {
        return (
            <div>
                <h1>Wandeling toevoegen</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Lengte van de wandeling</label><br></br>
                    <input type="text" id="lengte" onChange={this.handleChange}></input><br></br>
                    <label>Startuur</label><br></br>
                    <input type="number" id="startuur" onChange={this.handleChange}></input><br></br>
                    <label>Stopuur</label><br></br>
                    <input type="number" id="stopuur" onChange={this.handleChange}></input><br></br>                    
                    <label>Straat</label><br></br>
                    <input type="text" id="straat" onChange={this.handleChange}></input><br></br>
                    <label>Straatnummer</label><br></br>
                    <input type="number" id="straatnr" onChange={this.handleChange}></input><br></br>
                    <label>Postcode</label><br></br>
                    <input type="number" id="postcode" onChange={this.handleChange}></input><br></br>
                    <label>Gemeente</label><br></br>
                    <input type="text" id="gemeente" onChange={this.handleChange}></input><br></br>
                    <label>Datum</label><br></br>
                    <input type="date" id="datum" onChange={this.handleChange}></input><br></br>
                    <input type="submit"></input>
                </form>
            </div>
            
        );
    }
}

export default AddWalk;