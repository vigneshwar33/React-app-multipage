import React from 'react';
import PersonPicture from './personpicture';

class PersonCard extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col xs-4">
                    <PersonPicture />
                </div>
                <div className="col xs-6">
                    <h3>Firstname Lastname</h3>
                    <p>About this person.</p>
                </div>
            </div>
        );
    }
}

export default PersonCard;