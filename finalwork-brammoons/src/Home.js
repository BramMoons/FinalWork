import React from 'react';
import axios from 'axios';

class Home extends React.Component {

    constructor(props) {
        super(props);
        let mens;
        this.state = {mens:{"kleur": "bruin", "karakter": "sociaal"}, dier:{ras: "vul formulier in", kleur: "vul formulier in"}}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
		let mens = this.state.mens;
		switch(event.target.id){
			case "kleur":
				mens.kleur = event.target.value;
				break;
			case "karakter":
				mens.karakter = event.target.value;
				break;
			default:
				// Can be ignored
		}
		
		this.setState(mens);
	}

    handleSubmit() {
        console.log("haarkleur test ", this.state.mens.kleur);
        axios.get("http://127.0.0.1:8080/Dier/getByKleur?kleur="+this.state.mens.kleur)
            .then(this.parseResponse.bind(this));
    }

    parseResponse(response) {
        console.log("axios response: ",response);
        let rows = [];
        rows = response.data;
        rows.dierId = response.data.dierId;
        rows.geslacht = response.data.geslacht;
        rows.karakter = response.data.karakter;
        rows.kleur = response.data.kleur;
        rows.leeftijd = response.data.leeftijd;
        rows.photoPath = response.data.photoPath;
        rows.ras = response.data.ras;
        rows.soort = response.data.soort;
        this.setState({dier: rows});
        console.log("rows ", rows);
        console.log("state dier ", this.state.dier);
    }

    render() {
        return (
            <div id="home">
                <h1>Match your best friend</h1>
                    <div id="form1">
                    <form onSubmit={this.handleSubmit}>
                        <label>Selecteer je foto</label><br></br>
                        <input type="file" id="gezichtFoto" name="gezichtFoto"></input><br></br>
                        <label>Geef je haarkleur</label><br></br>
                        <input type="text" id="kleur" onChange={this.handleChange}></input><br></br>
                        <label>Geef een karakter trek mee</label><br></br>
                        <input type="text" id="karakter" onChange={this.handleChange}></input><br></br>
                        <input type="submit" onClick={this.handleSubmit}></input>
                        <button type="button" onClick={this.handleSubmit}>Verzenden2</button>
                    </form>
                </div>
                <div id="form2">
                    <form>
                        <label>Gematcht dier</label><br></br>
                        <label>Ras van het dier</label><br></br>
                        <input type="text" value={this.state.dier.ras} /><br></br>
                        <label>Geslacht van het dier</label><br></br>
                        <input type="text" value={this.state.dier.geslacht} /><br></br>
                        <label>Kleur van het dier</label><br></br>
                        <input type="text" value={this.state.dier.kleur} /><br></br>
                        <label>Grootte van het dier (in cm)</label><br></br>
                        <input type="text" value={this.state.dier.grootte} /><br></br>
                        <label>karakter van het dier</label><br></br>
                        <input type="text" value={this.state.dier.karakter} /><br></br>
                        <label>Leeftijd van het dier</label><br></br>
                        <input type="text" value={this.state.dier.leeftijd} /><br></br>
                        <image src={this.state.dier.photoPath}></image>
                    </form>
                </div>
               
            </div>
            
        );
    }
}

export default Home;