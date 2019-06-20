import React from 'react';

import {WordIngredient} from './word-ingredient';
import {WordHeader} from './word-header';
import {WordContent} from './word-content';

export function WordContainer(props){
        const wordBody = props.wordBody;
        if(wordBody){
            return (
                <div className="container">                
                    <WordHeader content={wordBody.wordDetails}/>
                    <WordContent content={wordBody.wordContent}/>
                    <WordIngredient content={wordBody.wordIngredient}/>
                </div>
            );
        } else{
            return null;
        }
}



