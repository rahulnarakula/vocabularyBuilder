import React, { Component } from 'react';
import { AnswerOption } from './answer-option';

export class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_options: [],
            content: props.content,
            is_question_completed: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.content && nextProps.content && this.props.content.question !== nextProps.content.question) {
            this.setState({
                selected_options: [],
                content: nextProps.content,
                is_question_completed: false
            });
        }
    }
    handleClick(isAnswer, index) {
        if (!this.state.is_question_completed) {
            if (isAnswer) {
                let selectedOptions = this.state.selected_options;
                selectedOptions.push(index);
                this.setState({
                    is_question_completed: true
                });
                // this.state.is_question_completed=true;
                this.setState({ selected_options: selectedOptions });
                this.props.triggerDefinition();
            } else {
                let selectedOptions = this.state.selected_options;
                selectedOptions.push(index);
                this.setState({ selected_options: selectedOptions });
            }
        } else {
            return false;
        }
    }
    render() {
        console.log(this.props);
        const listAnswers = this.state.content.answers.map((answer, index) =>
            <AnswerOption
                answer={answer}
                key={index}
                selected={this.state.selected_options.includes(index)}
                index={index} isAnswer={parseInt(this.state.content.correct_answer) === index + 1}
                wrongColor={this.state.wrong_answer_color} onClick={(i, j) => this.handleClick(i, j)} />
        );

        return (
            <div className="question-answer">
                <div className="context-question mt-4">
                    <h3 className='ml-3'>{this.props.content.question}</h3>
                </div>
                <div className="context-options">
                    <ul id="choice-section" className='pr-5'>
                        {listAnswers}
                    </ul>
                </div>
            </div>
        );
    }
}


