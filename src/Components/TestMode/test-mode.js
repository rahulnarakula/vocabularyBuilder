import React, { Component } from 'react';
import {TestContainer} from './test-container';

export class TestMode extends Component{
    constructor(props) {
        super(props);
        this.state = {
            wordBodyList: null,
            currentPosition: null,
            listCount: null,
            colors:["#eff7ff","#ffe5eb","#e6ffe5"]
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
        var colorPositon = position%this.state.colors.length;
        document.body.style = 'background: '+ this.state.colors[colorPositon]+';';
        const wordBodyList = this.state.wordBodyList;
        if(position != null && position >= 0 && position < this.state.listCount && wordBodyList){
            const word = wordBodyList[position].body.wordDetails.word;
            const content = wordBodyList[position].body.wordContent.sentence;
            return (
                <div className="col d-flex justify-content-center mt-5 pt-3">
                    <TestContainer content={content} word={word} getNextWord={()=>this.incrementPosition()}/>
                </div>
            );
        } else{
            return (
                <div className="col d-flex justify-content-center mt-5 pt-3">
                    <h2>Completed!</h2>
                </div>
            );
        }
    }
}

