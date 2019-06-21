import React, { Component } from 'react';
import { MissingLetter } from './missing-letter';
import { WordResult } from './word-result';

export class MissingWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredLetters: Array(this.props.word.length),
            enteredWord: ""
        }


        this.handleChange = this.handleChange.bind(this);
        this.callParentGetNextWord = this.callParentGetNextWord.bind(this);

    }
    componentWillReceiveProps() {
        this.setState({
            enteredLetters: Array(this.props.word.length),
            enteredWord: ""
        });
    }
    checkIsWordCompleted() {
        var formedWord = this.state.enteredLetters.join("");
        if (formedWord.length === this.props.word.length) {
            this.setState({
                enteredWord: formedWord
            });
        }
    }

    handleChange(event, key) {
        var enteredLetter = event.target.value;
        var target = event.target;
        var prevEnteredLetters = [...this.state.enteredLetters];
        prevEnteredLetters[key] = enteredLetter;

        this.setState({
            enteredLetters: prevEnteredLetters
        },
            () => {
                this.checkIsWordCompleted();
            }
        );
        if (enteredLetter) {
            if (target.closest('span').nextElementSibling) {
                target.closest('span').nextElementSibling.children[0].focus();
            }
        } else {
            if (target.closest('span').previousElementSibling) {
                target.closest('span').previousElementSibling.children[0].focus();
            }
        }
    }

    callParentGetNextWord() {
        this.props.getNextWord();
    }

    render() {
        const word = this.props.word;
        const wordArray = word.split("");
        return (
            <div>
                <div className="col d-flex justify-content-center my-5">
                    {wordArray.map((answer, i) => {
                        return (<MissingLetter key={word + i} letter={answer} letterPosition={i} handleChange={this.handleChange} />);
                    })}
                </div>
                <WordResult word={this.props.word} enteredWord={this.state.enteredWord} callNextWord={() => this.callParentGetNextWord()} />
            </div>
        );
    }
}
