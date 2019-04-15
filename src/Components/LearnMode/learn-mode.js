import React, { Component } from 'react';

import {WordIngredient} from './word-ingredient';
import {WordHeader} from './word-header';
import {WordContent} from './word-content';

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



