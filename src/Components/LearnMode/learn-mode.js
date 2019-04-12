import React, { Component } from 'react';

export class LearnMode extends Component{
    render() {
        return (
            <div className="container">                
                <WordHeader />
                <WordContent />
                <WordIngredient />
            </div>
        );
    }
}

class WordContent extends Component{
    constructor(props){
        super(props);
        this.state={
            should_display_definition:false
        };
    }

    triggerDefinition(){
        if(!this.state.should_display_definition){
            this.setState({should_display_definition:true});
        }
    }
    render(){           
        const content = "Nina’s long and tortuous journey was filled with twists and turns along the mountain road. Although Nina had noticed that her chosen route would have many bends, she had had no idea that she was in for such a tortuous or complex ride. When she had finally navigated through that winding, tortuous, and roundabout road, she felt like she too was all wound up";
        const questionContent = {
                                    question: "When is something considered tortuous?",
                                    answers: [
                                        "When it is complicated with many turns and bends.",
                                        "When it takes all day long to complete.",
                                        "When it almost makes you sick."
                                    ],
                                    correct_answer:1
                                };                    
        return (
            <div className="card">
                <div className="context-heading card-header">Context</div>
                <div className="context-body card-body">
                    <Statement content={content}/>
                    <Question content={questionContent}/>                
                    <Definition 
                    display={this.state.should_display_definition}
                    onClick={()=>this.triggerDefinition()}
                    />
                </div>
            </div>
        );
    }
}

function Statement(props){
    return (
        <div className="context-statement">
            {props.content}
        </div>
    );
}

class Question extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected_options:[],
            content:props.content,
            is_question_completed: false
                    }
    }
    handleClick(isAnswer,index){
        if(!this.state.is_question_completed){
            if(isAnswer){
                let selectedOptions = this.state.selected_options;
                selectedOptions.push(index);
                this.setState({selected_options:selectedOptions});
                this.setState({is_question_completed:true});
            } else{
                let selectedOptions = this.state.selected_options;
                selectedOptions.push(index);
                this.setState({selected_options:selectedOptions});
            }
        } else{
            return false;
        }
    }
    render(){
        const listAnswers = this.state.content.answers.map((answer,index)=>
            <AnswerOption 
            answer={answer} 
            key={index} 
            selected={this.state.selected_options.includes(index)} 
            index={index} isAnswer={this.state.content.correct_answer==index+1} 
            wrongColor={this.state.wrong_answer_color} onClick={(i,j)=>this.handleClick(i,j)} />
        );

        return (
            <div className="question-answer">
                <div className="context-question mt-4">
                    <h3 className='ml-3'>{this.state.content.question}</h3>
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

class AnswerOption extends Component{
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

function WordHeader(){
    return (
        <div className="row my-3">
                    <div className="main-word text-center mx-auto">
                        <h1 className='text-uppercase'>tortuous</h1>
                        <h5>TAWR-choo-uhs</h5>
                    </div>
                </div>
    );
}

function WordIngredient(){
    return (
        
        <div className="card my-5">
            <div className="module-medium panel " id="word-structure">
                <h3 className="title card-header">Word Ingredients</h3>
                <div className="content card-body">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <a className="wi-btn partform" data-tree-id="tort_twisted" data-tree-url="//cdn1.membean.com/public/data/treexml" href="#">
                                        <span className=""></span>
                                        tort
                                    </a>
                                </td>
                                <td></td>
                                <td className="meaning">twisted, wound, wrapped</td>
                            </tr>
                            <tr>
                                <td>
                                    <a className="wi-btn partform" data-tree-id="uous_nature" data-tree-url="//cdn1.membean.com/public/data/treexml" href="#">
                                        <span className=""></span>
                                        -uous
                                    </a>
                                </td>
                                <td></td>
                                <td className="meaning">of the nature of</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Something <em>tortuous</em>, like a mountain road or difficult language, is “twisted, wound, or wrapped” up so as to make it complex to navigate.</p>
                </div>
            </div>
        </div>
    );
}

function Definition(props){
    return (
        <div id="definition">
            <button className="show-definition btn btn-primary my-2"  onClick={()=>props.onClick()}>Definition</button>
            <DefinitionText display={props.display}/>
        </div>
    );
}

function DefinitionText(props){
    if(props.display){
        return (
            <div className="def-bubble bg-info text-white p-3">
                    Something that is <em>tortuous</em>, like a piece of writing, is long and complicated with many twists and turns of direction; a <em>tortuous</em> argument can be deceitful because it twists or turns the truth.
                </div>
        );
    } else {
        return null;
    }
}