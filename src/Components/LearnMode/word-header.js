import React from 'react';

export function WordHeader(props){
    return (
        <div className="row my-3">
                    <div className="main-word text-center mx-auto">
                        <h1 className='text-uppercase'>{props.content.word}</h1>
                        <h5>{props.content.spell}</h5>
                    </div>
                </div>
    );
}
