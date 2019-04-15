import React, { Component } from 'react';
import {Definition} from './definition';
import {Statement} from './statement';
import {Question} from './question';

export class WordContent extends Component{
    constructor(props){
        super(props);
        this.state={
            should_display_definition:false
        };
        this.triggerDefinition = this.triggerDefinition.bind(this);
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
                    <Question content={questionContent} triggerDefinition={()=>this.triggerDefinition()}/>                
                    <Definition 
                    display={this.state.should_display_definition}
                    onClick={()=>this.triggerDefinition()}
                    />
                </div>
            </div>
        );
    }
}



