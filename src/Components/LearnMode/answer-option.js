import React, { Component } from 'react';

export class AnswerOption extends Component{
    constructor(props){
        super(props);
        this.state = {
            correct_answer_color:"green",
            wrong_answer_color:"red",
            content:props.content,
            is_question_completed: false
                    }
    }
    render(){
        return (
            <li 
            className="choice answer border my-3 rounded p-2" 
            style={this.props.selected? this.props.isAnswer?{background: this.state.correct_answer_color}:{background: this.state.wrong_answer_color}:{background: "none"}} 
            onClick={()=>this.props.onClick(this.props.isAnswer,this.props.index)}>
                <span className="result mr-2">{this.props.index+1}.</span>
                {this.props.answer}
            </li>
        );
    }
}
