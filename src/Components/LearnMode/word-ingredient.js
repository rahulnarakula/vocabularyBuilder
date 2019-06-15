import React from 'react';

export function WordIngredient(props){
    return (
        
        <div className="card my-5">
            <div className="module-medium panel " id="word-structure">
                <h3 className="title card-header">Word Ingredients</h3>
                <div className="content card-body">
                    <table>
                        <tbody>
                            {props.content.roots.map((item,key)=>{
                                return (        
                                    <tr key={key}>
                                        <td>
                                            <a className="wi-btn partform" data-tree-id="tort_twisted" data-tree-url="//cdn1.membean.com/public/data/treexml" href="#">
                                                <span className=""></span>
                                                {item.root}
                                            </a>
                                        </td>
                                        <td></td>
                                        <td className="meaning">{item.meaning}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <p>
                        {props.content.example}
                    </p>
                </div>
            </div>
        </div>
    );
}