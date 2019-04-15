import React, { Component } from 'react';

export function WordIngredient(){
    return (
        
        <div className="card my-5">
            <div className="module-medium panel " id="word-structure">
                <h3 className="title card-header">Word Ingredients</h3>
                <div className="content card-body">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <a className="wi-btn partform" data-tree-id="tort_twisted" data-tree-url="//cdn1.membean.com/public/data/treexml" href="#">
                                        <span className=""></span>
                                        tort
                                    </a>
                                </td>
                                <td></td>
                                <td className="meaning">twisted, wound, wrapped</td>
                            </tr>
                            <tr>
                                <td>
                                    <a className="wi-btn partform" data-tree-id="uous_nature" data-tree-url="//cdn1.membean.com/public/data/treexml" href="#">
                                        <span className=""></span>
                                        -uous
                                    </a>
                                </td>
                                <td></td>
                                <td className="meaning">of the nature of</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Something <em>tortuous</em>, like a mountain road or difficult language, is “twisted, wound, or wrapped” up so as to make it complex to navigate.</p>
                </div>
            </div>
        </div>
    );
}