import React from 'react';
import axios from 'axios';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(foto) {

    }

    render() {
        return (
            <div>
                <p>Home. Welcome Home</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Selecteer je foto</label><br></br>
                    <input type="file" id="gezichtFoto" name="gezichtFoto"></input>
                </form>
            </div>
            
        );
    }
}

export default Home;