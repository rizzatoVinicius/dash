// Core.jsx
import "./css/core.css"
import getStarted from "../img/get-started.svg"
import React from 'react';
import { CORE } from './data';

export default function Core() {
    return (
        <article id="core">
            <span className="intro-span">Do more with our features</span>
            <h2>Unleash the Power of Data Dynamics</h2>
            {CORE.map((item, index) => (
                <div key={index} className="core-container">
                    <div className="core-container-text">
                        <div className="core-container-text-span">
                            <span className="intro-span">{item.span}</span>
                        </div>
                        <div className="core-container-text-desc">
                            <h3>{item.title.split('\n').map((line, index) => (
                                <React.Fragment key={index}>{line}<br /></React.Fragment>
                            ))}</h3>
                            <p dangerouslySetInnerHTML={{ __html: item.text }} />
                            <div>
                                <a href={item.buttonLink} className="core-get-started">
                                    {item.button}<img src ={getStarted} />
                                </a>
                            </div>

                        </div>
                    </div>
                    <img className="core-img" src={item.img} alt="" />
                </div>
            ))}
        </article>
    );
}


