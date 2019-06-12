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
            enteredWord : Array(this.props.word.length)
        }            
        
        this.handleChange = this.handleChange.bind(this);    

    }
    
    checkIsWordCompleted(){
        var formedWord= this.state.enteredWord.join("");
        if(formedWord.length == this.props.word.length){
            this.checkWordSpelling(formedWord);
        }
    }

    checkWordSpelling(formedWord){
        if(formedWord == this.props.word) {
            console.log("Correct");
        } else {
            console.log("Wrong");
        }
    }

    handleChange(event,key) {
        this.state.enteredWord[key] = event.target.value;
        this.checkIsWordCompleted();
        if(event.target.value) {
            if(event.target.closest('span').nextElementSibling){
                event.target.closest('span').nextElementSibling.children[0].focus();
            }
        } else {
            if(event.target.closest('span').previousElementSibling){
                event.target.closest('span').previousElementSibling.children[0].focus();
            }
        }
    }

    render() {

        const word = this.props.word;
        const wordArray = word.split("");
        const wordLength = wordArray.length;
        return (
            <div className="m-5">
                {wordArray.map((answer, i) => {      
                   return (<MissingLetter key={i} letter={answer} letterPosition={i} handleChange={this.handleChange}/>);
                })}
            </div>
        );
    }
}

export class MissingLetter extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="letter-block m-2">
                <input className="border" maxLength='1' onChange={(e) => {this.props.handleChange(e,this.props.letterPosition)}}/>
            </span>
        );
    }
}

