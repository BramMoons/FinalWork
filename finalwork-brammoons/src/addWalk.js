import React from 'react';
import axios from 'axios';

class AddWalk extends React.Component {

    constructor(props) {
        super(props);
        let walk;
        this.state={walk};
    }

    handleSubmit() {
        axios.put(process.env.REACT_APP_API_URL+"/Wandeling/voegToe/"+this.dier);
        window.location.reload;
    }

    handleChange(event) {
		console.log("state in handleChange: ",this.state);
		let walk = this.state.walk;
		let state = {};
		switch(event.target.id){
			case "lengte":
				walk.lengte = event.target.value;
				break;
			case "startuur":
				walk.startuur = event.target.value;
				break;
			case "stopuur":
				walk.stopuur = event.target.value;
				break;
			case "straat":
				walk.straat = event.target.value;
                break;
            case "straatnr":
                walk.straatnr = event.target.value;
                break;
            case "postcode":
                walk.postcode = event.target.value;
                break;
            case "gemeente":
                walk.gemeente = event.target.value;
                break;
			default:
				// Can be ignored
		}
		state.walk = walk;
		
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