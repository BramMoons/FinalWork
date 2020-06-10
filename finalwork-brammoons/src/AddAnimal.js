import React from 'react';
import axios from 'axios';

class AddAnimal extends React.Component {

    constructor(props) {
        super(props);
        let dier;
        this.state={dier};
    }

    handleSubmit() {
        axios.put(process.env.REACT_APP_API_URL+"/Dier/voegToe/"+this.dier)
    }

    handleChange(event) {
        console.log("state in handleChange: ",this.state);
		let dier = this.state.dier;
		let state = {};
		switch(event.target.id){
			case "ras":
				dier.ras = event.target.value;
				break;
			case "grootte":
				dier.grootte = event.target.value;
				break;
			case "karakter":
				dier.karakter = event.target.value;
				break;
			case "geslacht":
				dier.geslacht = event.target.value;
                break;
            case "leeftijd":
                dier.leeftijd = event.target.value;
                break;
            case "foto":
                dier.foto = event.target.value;
                break;
			default:
				// Can be ignored
		}
		state.dier = dier;
		
		this.setState(dier);
    }

    render() {
        return (
            <div>
                <p>Dier toevoegen</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Naam van het dier</label><br></br>
                    <input type="text" id="name"></input><br></br>
                    <label>Ras van het dier</label><br></br>
                    <input type="text" id="ras" onChange={this.handleChange}></input><br></br>
                    <label>Grootte van het dier</label><br></br>
                    <input type="number" id="grootte" onChange={this.handleChange}></input><br></br>                    
                    <label>Karakter van het dier</label><br></br>
                    <input type="text" id="karakter" onChange={this.handleChange}></input><br></br>
                    <label>Geslacht van het dier</label><br></br>
                    <input type="text" id="geslacht" onChange={this.handleChange}></input><br></br>
                    <label>Leeftijd van het dier</label><br></br>
                    <input type="number" id="leeftijd" onChange={this.handleChange}></input><br></br>
                    <label>Selecteer foto</label><br></br>
                    <input type="file" id="foto" name="foto" onChange={this.handleChange}></input><br></br>
                    <input type="submit"></input>
                </form>
            </div>
            
        );
    }
}

export default AddAnimal;