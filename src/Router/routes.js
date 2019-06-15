import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Home} from '.././Components/Home/home';
import {LearnMode} from '.././Components/LearnMode/learn-mode';
import {TestMode} from '.././Components/TestMode/test-mode';

export class Routes extends Component{
    render(){
        return(
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/learn/" component={LearnMode} />
                <Route path="/test/" component={TestMode} />
            </Router>
        );
    }
}