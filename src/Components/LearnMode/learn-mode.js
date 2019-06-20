import React, { Component } from 'react';
import {WordContainer} from './word-container';

export class LearnMode extends Component{
    constructor(props) {
        super(props);
        this.state = {
            wordBodyList: null,
            currentPosition: null,
            listCount: null
        }
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

    render= () => {
        const position = this.state.currentPosition;
        const wordBodyList = this.state.wordBodyList;
        if(position != null && position >= 0 && position < this.state.listCount && wordBodyList){
            const wordBody = wordBodyList[position].body;
            return (
                <div>
                    <button onClick={()=>this.incrementPosition()}>next</button>
                    <WordContainer wordBody={wordBody} />
                </div>
            );
        } else{
            return null;
        }
    }
}


