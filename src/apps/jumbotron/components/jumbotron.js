import React from 'react';

class JumboTron extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Home</h1>
                <a href="about" className="btn btn-primary btn-lg">Learn more</a>
            </div>
        );
    }
}

export default JumboTron;