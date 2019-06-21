import React from 'react';
import {MissingWord} from './missing-word';
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
            <div className="context-heading card-header">Enter the Spelling of missing word</div>
            <div className="context-body card-body">
                {blankedContent}
            </div>
        </div>
        
        <MissingWord  word={word} getNextWord={()=>CallNextWord()}/>
        </div>
    );
}