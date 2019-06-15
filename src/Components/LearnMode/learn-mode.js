import React, { Component } from 'react';

import {WordIngredient} from './word-ingredient';
import {WordHeader} from './word-header';
import {WordContent} from './word-content';

export class LearnMode extends Component{
    render() {
        const wordBody = {
            wordDetails: {
                word: "tortuous",
                spell: "TAWR-choo-uhs"
            },
            wordContent: {
                sentence: "Nina’s long and tortuous journey was filled with twists and turns along the mountain road. Although Nina had noticed that her chosen route would have many bends, she had had no idea that she was in for such a tortuous or complex ride. When she had finally navigated through that winding, tortuous, and roundabout road, she felt like she too was all wound up",
                questionContent: {
                    question: "When is something considered tortuous?",
                    answers: [
                        "When it is complicated with many turns and bends.",
                        "When it takes all day long to complete.",
                        "When it almost makes you sick."
                    ],
                    correct_answer:1
                }
            },
            wordIngredient: {
                roots : [
                    {root: "tort", meaning: "twisted, wound, wrapped"},
                    {root: "-uous", meaning: "of the nature of"}
                ],
                example: "Something tortuous, like a mountain road or difficult language, is “twisted, wound, or wrapped” up so as to make it complex to navigate."
            }

        };
        return (
            <div className="container">                
                <WordHeader content={wordBody.wordDetails}/>
                <WordContent content={wordBody.wordContent}/>
                <WordIngredient content={wordBody.wordIngredient}/>
            </div>
        );
    }
}



