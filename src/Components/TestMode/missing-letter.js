import React, { Component } from 'react';

export class MissingLetter extends Component{
    render() {
        const keyPositionID = "key-position-"+this.props.letterPosition;
        return (
            <span className="letter-block m-2">
                <input className="border single-letter" id={keyPositionID} maxLength='1' onChange={(e) => {this.props.handleChange(e,this.props.letterPosition)}}/>
            </span>
        );
    }
}