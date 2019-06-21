import React, { Component } from 'react';

export class WordResult extends Component {
    render() {
        if (this.props.enteredWord.length > 0) {
            var answer = this.props.word;
            var input = this.props.enteredWord;
            var length = input.length;
            var correct = (input === answer) ? "Correct" : "Wrong";
            if (correct === "Wrong") {
                var missedLettersCount = 0;
                for (var i = 0; i < length; i++) {
                    if (input.charAt(i) !== answer.charAt(i)) {
                        missedLettersCount++;
                    }
                }
                if (missedLettersCount === 1) {
                    correct = "Missed by " + missedLettersCount + " letter";
                } else if (missedLettersCount === 2) {
                    correct = "Missed by " + missedLettersCount + " letters";
                }
            }
            setTimeout(
                function () {
                    this.props.callNextWord();
                }
                    .bind(this),
                5000
            );
            return (
                <div className="col d-flex justify-content-center my-5">
                    <div className="card">
                        <div className="card-header text-center word-result">{correct}</div>
                        {correct === "Correct" ? "" :
                            <div className="card-body word-correction text-center">
                                <span className="wrong-answer mr-2">{input}</span>
                                <span className="arrow mr-2">{"-->"}</span>
                                <span className="correct-answer">{answer}</span>
                            </div>}
                    </div>
                </div>
            );
        } else {
            return false;
        }
    }
}
