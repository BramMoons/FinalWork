import React from 'react';
import axios from 'axios';

class Home extends React.Component {

    constructor(props) {
        super(props);
        let mens;
        this.state = {mens, dier:{ras: "vul formulier in", kleur: "vul formulier in"}}
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
                        <input type="submit"></input>
                    </form>
                </div>
                <div id="form2">
                    <form>
                        <label>Gematcht dier</label><br></br>
                        <label>Ras van het dier</label><br></br>
                        <input type="text" value={this.state.dier.ras} /><br></br>
                        <label>Geslacht van het dier</label><br></br>
                        <input type="text" value={this.state.dier.kleur} /><br></br>
                        <image src={this.state.dier.photoPath}></image>
                    </form>
                </div>
               
            </div>
            
        );
    }
}

export default Home;