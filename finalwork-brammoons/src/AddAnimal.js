import React from 'react';
import axios from 'axios';

class AddAnimal extends React.Component {

    constructor(props) {
        super(props);
        let dier = {};
        dier.ras = "";
        dier.grootte = "20";
        dier.kleur = "";
        dier.karakter = "";
        dier.geslacht = "";
        dier.leeftijd = "1";
        dier.foto = "";
        this.state = {dier:{naam: "Jef", ras: "witte herder", grootte: 40, kleur: "wit", karakter: "sociaal", geslacht: "man", leeftijd: 1, foto: "WitteHerder.jpg"}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        axios.put("http://127.0.0.1:8080/Dier/voegToe/"+this.dier)
    }

    handleChange(event) {
		let dier = this.state.dier;
		switch(event.target.id){
            case "name":
                dier.naam = event.target.value;
                break;
			case "ras":
				dier.ras = event.target.value;
				break;
			case "grootte":
				dier.grootte = event.target.value;
                break;
            case "kleur":
                dier.kleur = event.target.value;
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
		
		this.setState(dier);
    }

    render() {
        return (
            <div>
                <h1>Dier toevoegen</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Naam van het dier</label><br></br>
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.dier.naam}></input><br></br>
                    <label>Ras van het dier</label><br></br>
                    <input type="text" id="ras" onChange={this.handleChange} value={this.state.dier.ras}></input><br></br>
                    <label>Grootte van het dier</label><br></br>
                    <input type="number" id="grootte" onChange={this.handleChange} value={this.state.dier.grootte}></input><br></br> 
                    <label>Kleur van het dier</label><br></br>
                    <input type="text" id="kleur" onChange={this.handleChange} value={this.state.dier.kleur}></input><br></br>                    
                    <label>Karakter van het dier</label><br></br>
                    <input type="text" id="karakter" onChange={this.handleChange} value={this.state.dier.karakter}></input><br></br>
                    <label>Geslacht van het dier</label><br></br>
                    <input type="text" id="geslacht" onChange={this.handleChange} value={this.state.dier.geslacht}></input><br></br>
                    <label>Leeftijd van het dier</label><br></br>
                    <input type="number" id="leeftijd" onChange={this.handleChange} value={this.state.dier.leeftijd}></input><br></br>
                    <label>Selecteer foto</label><br></br>
                    <input type="file" id="foto" name="foto" onChange={this.handleChange}></input><br></br>
                    <input type="submit"></input>
                </form>
            </div>
            
        );
    }
}

export default AddAnimal;