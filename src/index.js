import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import './SeasonDisplay.css';
import Spinner from './Spinner';


class App extends React.Component {
    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // helper function
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} /> 
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner />

    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )

    };
};

ReactDOM.render(<App />, document.querySelector('#root'));