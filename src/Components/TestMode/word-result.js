import React, { Component } from 'react';

export class WordResult extends Component{
    render() {
        if(this.props.enteredWord.length > 0){
            var answer = this.props.word;
            var input = this.props.enteredWord;
            var length = input.length;
            var correct = (input === answer)? "Correct":"Wrong";
            if(correct === "Wrong"){
                var missedLettersCount = 0;
                for(var i=0;i<length;i++){
                    if(input.charAt(i) !== answer.charAt(i)){
                        missedLettersCount++;
                    }
                }
                if(missedLettersCount === 1){
                    correct = "Missed by " + missedLettersCount + " letter";
                } else if(missedLettersCount === 2) {                    
                    correct = "Missed by " + missedLettersCount + " letters";
                }
            } else{
                setTimeout(
                    function() {
                        this.props.callNextWord();
                    }
                    .bind(this),
                    3000
                );
            }
            return (
                <div>
                    <div className="col d-flex justify-content-center my-5 card">{correct}</div>
                    {correct === "Correct" ? "" : 
                    <div>
                        <span className="wrong-answer">{input}</span>
                        <span className="arrow">{"-->"}</span>
                        <span className="correct-answer">{answer}</span>
                    </div>}
                </div>
            );
        } else{
            return false;
        }
    }
}
