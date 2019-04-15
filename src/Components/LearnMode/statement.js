import React, { Component } from 'react';

export function Statement(props){
    return (
        <div className="context-statement">
            {props.content}
        </div>
    );
}