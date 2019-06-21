import React, { Component } from 'react';
import { WordContainer } from './word-container';
import { Link } from "react-router-dom";

export class LearnMode extends Component {
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
            .then(response => response.json())
            .then(resData => {
                this.setState({
                    wordBodyList: resData,
                    listCount: resData.length,
                    currentPosition: 0
                }); //this is an asynchronous function
            })
    }

    incrementPosition() {
        var position = this.state.currentPosition;
        this.setState({
            currentPosition: ++position
        });
    }

    render = () => {
        const position = this.state.currentPosition;
        const wordBodyList = this.state.wordBodyList;
        if (position != null && position >= 0 && position < this.state.listCount && wordBodyList) {
            const wordBody = wordBodyList[position].body;
            return (
                <div>
                    <button className="btn-primary float-right m-3 rounded" onClick={() => this.incrementPosition()}>Next</button>
                    <WordContainer wordBody={wordBody} />
                </div>
            );
        } else {
            return (<div className="container">
                <div className="col d-flex justify-content-center mt-5">
                    <div className="card p-5">
                        <h3>You have covered all the words.</h3>
                        
                        <Link className="test-link text-center d-block  p-3 border border-primary rounded mt-3" to="/test">Time to take a Test</Link>                        
                    </div>
                </div>
            </div>);
        }
    }
}


