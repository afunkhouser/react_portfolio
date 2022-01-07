import React, { useState } from 'react';
import {BrowserRoter as Router, Link, Route, Routes} from 'react-router-dom';

import recentPhoto from '../../assets/images/recent photo.JPG'

function About (props) {    
    return (
        <div id="aboutMe">
            <h2 className="section-title">
               About Me:
            </h2>
            <img
                src={recentPhoto}
                alt='Afunkhouser Headshot'
                className= 'headshot'
            />
            <div className="section-bio">
                <p>
                Alison Funkhouser is a full stack website developer with strong, independent, and 
              committed work ethic seeking employment to kick start career in website development 
              and content curation. Having recently experienced the University of Washington's full 
              stack flex coding bootcamp, Alison is proficient in Javascript, jQuery, HTML5, CSS, 
              Bootstrap. Local storage, Session storage, Heroku, Github pages, Shell scripting, Unit 
              testing, API, REST, JSON, MYSQL, Node.js, and Express.js. Alison's previous background 
              includes graphic design, sales, and marketing from experience in and around Portland, OR. 
                </p>
            </div>
        </div>

    )
}

export default About;