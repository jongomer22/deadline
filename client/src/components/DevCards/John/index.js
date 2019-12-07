import React from 'react';
import '../../styles/AboutUs/devcard.scss'
import '../../styles/variables.scss';
import { FaLinkedin } from 'react-icons/fa';



function John() {

    return (
        <div>
            <div className="card dev-card">
                
                <div className="card-body">
                    <h3>Jonny Gomer</h3>
                    <p className="card-text"> Full stack web developer looking to pursue a career as a software engineer. The programming field sparked my interest as I am a very quick typer, so I was excited to learn more. Hoping to get into the industry and work my way up the ladder like the rest of us! #CodeGang
                    </p>
                    <h4>Skillset:</h4>
                    <ul>
                        <li>HTML/CSS/JS</li>
                        <li>NodeJs</li>
                        <li>ReactJs</li>
                        <li>Express</li>
                        <li>SQL/MongoDB</li>
                    </ul>
                    <a href="https://www.linkedin.com/in/jonathan-gomer-426446165/"><FaLinkedin className="aboutIcon" /></a>
                </div>
            </div>
        </div>
    )
}



export default John;