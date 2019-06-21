import React, { Component } from 'react';
import {TestContainer} from './test-container';

export class TestMode extends Component{
    constructor(props) {
        super(props);
        this.state = {
            wordBodyList: null,
            currentPosition: null,
            listCount: null
        }
        this.incrementPosition = this.incrementPosition.bind(this);
    }
    
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/rahulnarakula/vocabularyBuilder/words')
        .then(response =>  response.json())
        .then(resData => {
           this.setState({ 
               wordBodyList: resData,
               listCount: resData.length,
               currentPosition: 0
             }); //this is an asynchronous function
        })
    }

    
    incrementPosition(){
        var position = this.state.currentPosition;
        this.setState({
            currentPosition: ++position
        });
    }

    render() { 
        const position = this.state.currentPosition;
        const wordBodyList = this.state.wordBodyList;
        if(position != null && position >= 0 && position < this.state.listCount && wordBodyList){
            const word = wordBodyList[position].body.wordDetails.word;
            const content = wordBodyList[position].body.wordContent.sentence;
            return (
                <div>
                    <button onClick={this.incrementPosition}>next</button>
                    <TestContainer content={content} word={word} getNextWord={()=>this.incrementPosition()}/>
                </div>
            );
        } else{
            return null;
        }
    }
}



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
