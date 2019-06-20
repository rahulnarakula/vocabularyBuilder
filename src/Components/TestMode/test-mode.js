import React, { Component } from 'react';

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

export function TestContainer(props){         
    var content = props.content;
    var word = props.word;
    var blank = new Array(word.length + 1).join('_');
    var blankedContent = content.split(word).join(blank);
    function CallNextWord(){
        props.getNextWord()
    }
    return (
        <div className="container">
        <div className="card">
            <div className="context-heading card-header">Context</div>
            <div className="context-body card-body">
                {blankedContent}
            </div>
        </div>
        
        <MissingWord word={word} getNextWord={()=>CallNextWord()}/>
        </div>
    );
}

export class MissingWord extends Component{
    constructor(props){
        super(props);
        this.state = {
            enteredLetters: Array(this.props.word.length),
            enteredWord: ""
        }            
        
        this.handleChange = this.handleChange.bind(this);   
        this.callParentGetNextWord = this.callParentGetNextWord.bind(this);

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

    callParentGetNextWord(){
        this.props.getNextWord();
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
                <WordResult word={this.props.word} enteredWord={this.state.enteredWord} callNextWord={()=>this.callParentGetNextWord()}/>
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
            } else{
                // setTimeout(
                //     function() {
                //         this.props.callNextWord();
                //     }
                //     .bind(this),
                //     3000
                // );
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
    componentDidMount(){
        document.getElementById("key-position-"+this.props.letterPosition).value = "";
    }
    render() {
        const keyPositionID = "key-position-"+this.props.letterPosition;
        return (
            <span className="letter-block m-2">
                <input className="border" id={keyPositionID} maxLength='1' onChange={(e) => {this.props.handleChange(e,this.props.letterPosition)}}/>
            </span>
        );
    }
}
