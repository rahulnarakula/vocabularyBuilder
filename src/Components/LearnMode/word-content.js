import React, { Component } from 'react';
import { Definition } from './definition';
import { Statement } from './statement';
import { Question } from './question';

export class WordContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            should_display_definition: false
        };
        this.triggerDefinition = this.triggerDefinition.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if (this.props.content && nextProps.content && this.props.content !== nextProps.content) {
            this.setState({
                should_display_definition: false
            });
        }
    }

    triggerDefinition() {
        if (!this.state.should_display_definition) {
            this.setState({ should_display_definition: true });
        }
    }
    render() {
        const content = this.props.content.sentence;
        const questionContent = this.props.content.questionContent;
        const definition = this.props.content.definition;
        return (
            <div className="card">
                <div className="context-heading card-header">Context</div>
                <div className="context-body card-body">
                    <Statement content={content} />
                    <Question content={questionContent} triggerDefinition={() => this.triggerDefinition()} />
                    <Definition
                        display={this.state.should_display_definition}
                        onClick={() => this.triggerDefinition()}
                        definition={definition}
                    />
                </div>
            </div>
        );
    }
}



