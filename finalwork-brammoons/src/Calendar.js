import React from 'react';
import Calendar from 'react-calendar';

class Planning extends React.Component {
    state = {
        date: new Date()
    }

    onChange = date => this.setState({ date });

    render() {
        return (
            <div>
                <p>Dit is de calendar pagina!</p>
                <Calendar
                    onChange={this.onChange}
                    value={this.data}
                />
            </div>
        );
    }
}

export default Planning;