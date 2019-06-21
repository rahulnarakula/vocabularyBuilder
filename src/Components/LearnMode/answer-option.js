import React, { Component } from 'react';

export class AnswerOption extends Component{
    constructor(props){
        super(props);
        this.state = {
            correct_answer_color:"alert-success",
            wrong_answer_color:"alert-danger",
            content:props.content,
            is_question_completed: false
                    }
    }
    render(){        
        const background = this.props.selected? this.props.isAnswer? this.state.correct_answer_color: this.state.wrong_answer_color: " ";
        return (
            <li 
            className={"choice answer border my-3 rounded p-2 " + background}
            onClick={()=>this.props.onClick(this.props.isAnswer,this.props.index)}>
                <span className="result mr-2">{this.props.index+1}.</span>
                {this.props.answer}
            </li>
        );
    }
}
