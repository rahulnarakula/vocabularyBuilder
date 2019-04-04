import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Home extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className='mx-auto my-4'>Vocabulary Bulider</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Link className="learn-link text-center d-block  p-3 border border-primary rounded" to="/learn">Learn</Link>
                    </div>
                    <div className="col-md-6">
                        <Link className="test-link text-center d-block  p-3 border border-primary rounded" to="/test">Test</Link>
                    </div>
                </div>
            </div>
        );
    }
}