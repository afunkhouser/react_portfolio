import React, { useState } from 'react';


function Footer() {
    return (
        <footer className= "flex-row space-between px-1">
            <ul>
                <li className="footer-item">
                    <a
                        className="footer-link"
                        href="https://github.com/afunkhouser"
                        target="_blank"
                        rel="noreferrer">
    
                    </a>
                </li>
                <li className="footer-item">
                    <a 
                        className="footer-link"
                        href="https://www.linkedin.com/in/alison-funkhouser-aa5b28132/"
                        target="_blank"
                        rel="noreferrer">
                            
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;