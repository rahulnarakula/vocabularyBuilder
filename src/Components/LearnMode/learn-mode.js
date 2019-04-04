import React, { Component } from 'react';

export class LearnMode extends Component{
    render() {
        return (
            <div className="container">
                <div className="row my-3">
                    <div className="main-word text-center mx-auto">
                        <h3>tortuous</h3>
                        <h5>TAWR-choo-uhs</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="row context-heading">Context</div>
                    <div className="row context-body">
                        <div className="context-statement">
                            Nina’s long and tortuous journey was filled with twists and turns along the mountain road. Although Nina had noticed that her chosen route would have many bends, she had had no idea that she was in for such a tortuous or complex ride. When she had finally navigated through that winding, tortuous, and roundabout road, she felt like she too was all wound up.
                        </div>
                        <div className="context-question">
                            <h3>When is something considered tortuous?</h3>
                        </div>
                        <div className="context-options">
                            <ul id="choice-section">
                                <li className="choice answer ">
                                <span className="result">a.</span>
                                When it is complicated with many turns and bends.
                                </li>
                                <li className="choice ">
                                <span className="result">b.</span>
                                When it takes all day long to complete.
                                </li>
                                <li className="choice ">
                                <span className="result">c.</span>
                                When it almost makes you sick.
                                </li>
                            </ul>
                        </div>
                        <div id="definition">
                            <a className="show-definition">Definition</a>
                            <div className="def-bubble" >
                                Something that is <em>tortuous</em>, like a piece of writing, is long and complicated with many twists and turns of direction; a <em>tortuous</em> argument can be deceitful because it twists or turns the truth.
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                <div class="module-medium panel " id="word-structure">
<h3 class="title">
Word Ingredients
</h3>
<div class="content">
<table>
<tbody><tr>
<td>
<a class="wi-btn partform" data-tree-id="tort_twisted" data-tree-url="//cdn1.membean.com/public/data/treexml" href="#">
<span class=""></span>
tort
</a>
</td>
<td></td>
<td class="meaning">twisted, wound, wrapped</td>
</tr>
<tr>
<td>
<a class="wi-btn partform" data-tree-id="uous_nature" data-tree-url="//cdn1.membean.com/public/data/treexml" href="#">
<span class=""></span>
-uous
</a>
</td>
<td></td>
<td class="meaning">of the nature of</td>
</tr>
</tbody></table>
<p>Something <em>tortuous</em>, like a mountain road or difficult language, is “twisted, wound, or wrapped” up so as to make it complex to navigate.</p>


</div>
</div>
                </div>
            </div>
        );
    }
}