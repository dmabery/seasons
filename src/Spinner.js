import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader loading">{props.message}</div>

        </div>
    )
    };

    Spinner.defaultProps = {
        message: 'Calculating your position.'
}

export default Spinner;