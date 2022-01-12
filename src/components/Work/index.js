import React, { useState } from 'react';
import {BrowserRoter as Router, Link, Route, Routes} from 'react-router-dom';

function Work(props) {
    const {name, projectImage, liveLink, repoLink } =props;

    return (
        <div id="works" href={liveLink} target="_blank" className="workContainer">
            <img src={projectImage} className="projectImg" alt={name}>
            </img>
            <div className="linkContainer">
                <div className="links">
                    <a
                        href={liveLink}
                        target="_blank"
                        className='project-name'
                        rel='noreferrer'>
                        {name}
                    </a>
                    <a
                        href={repoLink}
                        target="_blank"
                        className="githubLink"
                        rel="noreferrer">
                            GitHub Repo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Work;