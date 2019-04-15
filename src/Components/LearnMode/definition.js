import React, { Component } from 'react';

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

export function Definition(props){
    return (
        <div id="definition">
            <button className="show-definition btn btn-primary my-2"  onClick={()=>props.onClick()}>Definition</button>
            <DefinitionText display={props.display}/>
        </div>
    );
}