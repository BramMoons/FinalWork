import React from 'react';
import axios from 'axios';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.getAllWalks = this.getAllWalks.bind(this);
        this.getAllAnimals = this.getAllAnimals.bind(this);
        this.getAllShelters = this.getAllShelters.bind(this);
    }

    componentDidMount() {
        this.getAllWalks();
        this.getAllAnimals();
        this.getAllShelters();
    }

    getAllWalks() {
        axios.get(process.env.REACT_APP_API_URL+"/Wandeling/GetAll");
    }
    
    getAllAnimals() {
        axios.get(process.env.REACT_APP_API_URL+"/Dier/GetAll");
    }

    getAllShelters() {
        axios.get(process.env.REACT_APP_API_URL+"/Asiel/GetAll");
    }

    render() {
        return (
            <p>Home. Welcome Home</p>
        );
    }
}

export default Home;