import React from 'react';

function DefinitionText(props) {
    if (props.display) {
        return (
            <div className="def-bubble bg-info text-white p-3">
                {props.definition}
            </div>
        );
    } else {
        return null;
    }
}

export function Definition(props) {
    return (
        <div id="definition">
            <button className="show-definition btn btn-primary my-2" onClick={() => props.onClick()}>Definition</button>
            <DefinitionText display={props.display} definition={props.definition} />
        </div>
    );
}