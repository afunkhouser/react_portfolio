import React, { useState } from 'react';
import {BrowserRoter as Router, Link, Route, Routes} from 'react-router-dom';

function Nav(props) {
    const { pages = [], currentPage, setCurrentPage} = props;

    return (
        <header className="flex-row space-between px-1">
            <h2>
                <Link to='/react-portfolio'>
                    Alison Funkhouser
                </Link>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`${currentPage === 'about' && 'nav-active'}`}>
                        <span
                            onClick={() => setCurrentPage('about')}>
                                <Link to='/react_portfolio'>About Me</Link>
                        </span>
                    </li>
                    <li className={`${currentPage === 'portfolio' && 'nav-active'}`}>
                        <span
                            onClick={() => setCurrentPage('portfolio')}>
                                <Link to='/react_portfolio/portfolio'>Portfolio</Link>
                        </span>
                    </li>
                    <li className={`${currentPage === 'contact' && 'nav-active'}`}>
                        <span
                            onClick={() => setCurrentPage('contact')}>
                                <Link to='/react_portfolio/contact'>Contact</Link>
                        </span>
                    </li>
                    <li className={`${currentPage === 'resume' && 'nav-active'}`}>
                        <span
                            onClick={() => setCurrentPage('resume')}>
                                <Link to='/react_portfolio/resume'>Resumé</Link>
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;