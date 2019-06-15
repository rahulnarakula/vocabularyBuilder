import React, { Component } from 'react';

export class TestMode extends Component{
    render() {     
        var content = "Nina’s long and tortuous journey was filled with twists and turns along the mountain road. Although Nina had noticed that her chosen route would have many bends, she had had no idea that she was in for such a tortuous or complex ride. When she had finally navigated through that winding, tortuous, and roundabout road, she felt like she too was all wound up";
        var word = "tortuous";
        var blank = new Array(word.length + 1).join('_');
        var con = content.split(word).join(blank);
        return (
            <div className="container">
            <div className="card">
                <div className="context-heading card-header">Context</div>
                <div className="context-body card-body">
                    {con}
                </div>
            </div>
            
            <MissingWord word="tortuous"/>
            </div>
        );
    }
}

export class MissingWord extends Component{
    constructor(props){
        super(props);
        this.state = {
            enteredLetters: Array(this.props.word.length),
            enteredWord: ""
        }            
        
        this.handleChange = this.handleChange.bind(this);    

    }
    
    checkIsWordCompleted(){
        var formedWord= this.state.enteredLetters.join("");
        if(formedWord.length === this.props.word.length){
            this.setState({
                enteredWord: formedWord
            });
        }
    }

    handleChange(event,key) {
        var enteredLetter =  event.target.value;
        var target = event.target;
        var prevEnteredLetters = [...this.state.enteredLetters];
        prevEnteredLetters[key] = enteredLetter;

        this.setState({
            enteredLetters: prevEnteredLetters
        },
        () => {
            this.checkIsWordCompleted();
            console.log(this.state.enteredLetters);
        }
        );
        this.checkIsWordCompleted();
        if(enteredLetter) {
            if(target.closest('span').nextElementSibling){
                target.closest('span').nextElementSibling.children[0].focus();
            }
        } else {
            if(target.closest('span').previousElementSibling){
                target.closest('span').previousElementSibling.children[0].focus();
            }
        }
    }

    render() {

        const word = this.props.word;
        const wordArray = word.split("");
        return (
            <div>
                <div className="m-5">
                    {wordArray.map((answer, i) => {      
                    return (<MissingLetter key={i} letter={answer} letterPosition={i} handleChange={this.handleChange}/>);
                    })}
                </div>
                <WordResult word={this.props.word} enteredWord={this.state.enteredWord}/>
            </div>
        );
    }
}

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
            }
            return (
                <div>
                    <div className="card">{correct}</div>
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

export class MissingLetter extends Component{
    render() {
        return (
            <span className="letter-block m-2">
                <input className="border" maxLength='1' onChange={(e) => {this.props.handleChange(e,this.props.letterPosition)}}/>
            </span>
        );
    }
}

