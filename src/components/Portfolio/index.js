import React, { useState } from 'react';
import {BrowserRoter as Router, Link, Route, Routes} from 'react-router-dom';
import Work from '../Work';
import group from '../../assets/images/group.png'
import codeQuiz from '../../assets/images/code quiz.png'
import dayPlanner from '../../assets/images/day planner.png'
import refactor from '../../assets/images/refactoring.png'


function Portfolio(props) {
    return (
        <div className="portfolioContainer">
            <Work
                name='Group Project'
                repoLink='https://github.com/afunkhouser/team1_groupProject'
                liveLink='https://afunkhouser.github.io/team1_groupProject/'
                projectImage={group}
                className="work-item"
            />
            <Work
                name='Code Quiz'
                repoLink='https://github.com/afunkhouser/week4_codequiz'
                liveLink='https://afunkhouser.github.io/week4_codequiz/'
                projectImage={codeQuiz}
                className="work-item"
            />
            <Work
                name='Day Planner'
                repoLink='https://github.com/afunkhouser/week5-workDayScheduler'
                liveLink='https://afunkhouser.github.io/week5-workDayScheduler/'
                projectImage={dayPlanner}
                className="work-item"
            />
            <Work
                name='Refactor'
                repoLink='https://github.com/afunkhouser/week1_homework'
                liveLink='https://afunkhouser.github.io/week1_homework/'
                projectImage={refactor}
                className="work-item"
            />
        </div>
    )
}

export default Portfolio;