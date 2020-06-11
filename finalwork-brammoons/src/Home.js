import React from 'react';
import axios from 'axios';

class Home extends React.Component {

    constructor(props) {
        super(props);
        let mens;
        let dier;
        this.state = {mens, dier}
    }

    handleChange(event) {
		let mens = this.state.mens;
		let state = {};
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
		state.mens = mens;
		
		this.setState(mens);
	}

    handleSubmit() {
        axios.GET(process.env.REACT_APP_API_URL +"/Dier/getByKleur"+this.state.mens.kleur)
            .then(this.parseResponse.bind(this));
    }

    parseResponse(response) {
        console.log("axios response: ",response);
        let rows = [];
        rows = response.data;
        this.setState({dier: rows});
    }

    render() {
        return (
            <div>
                <p>Home. Welcome Home</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Selecteer je foto</label><br></br>
                    <input type="file" id="gezichtFoto" name="gezichtFoto"></input><br></br>
                    <label>Geef je haarkleur</label><br></br>
                    <input type="text" id="kleur" onChange={this.handleChange}></input><br></br>
                    <label>Geef een karakter trek mee</label><br></br>
                    <input type="text" id="karakter" onChange={this.handleChange}></input>
                </form>
                <form>
                    <label>Gematcht dier</label><br></br>
                    <label>Ras van het dier</label><br></br>
                    <input type="text" value={this.state.dier.ras} /><br></br>
                    <label>Geslacht van het dier</label><br></br>
                    <input type="text" value={this.state.dier.geslacht} /><br></br>
                    <image src={this.state.dier.photoPath}></image>
                </form>
            </div>
            
        );
    }
}

export default Home;