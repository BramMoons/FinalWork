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
        axios.get("https://172.0.0.1/Wandeling/GetAll");
    }
    
    getAllAnimals() {
        axios.get("https://172.0.0.1/Dier/GetAll");
    }

    getAllShelters() {
        axios.get("https://172.0.0.1/Asiel/GetAll");
    }

    render() {
        return (
            <p>Home. Welcome Home</p>
        );
    }
}

export default Home;