import React from 'react';
import '../../styles/AboutUs/devcard.scss'
import '../../styles/variables.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function Manny() {

    return (
        <div>
            <div className="card dev-card">
                
                <div className="card-body">
                    <h3>Manuel Zavala</h3> 
                    <p className="card-text">I am a Junior Developer with experience in many stacks and libraries, including HTML5, CSS3, JavaScript, and ReactJS.
                    I constantly look for ways to self-improve so I enrolled in, completed and am a recent Graduate of the University of California Berkeley Extension Full-Stack program where I have received Professional training on both Frontend and Backend Technologies.</p>
                    <h4>Skillset:</h4>
                    <ul>
                        <li>HTML5/CSS3</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>MySQL</li>
                        <li>Firebase</li>
                    </ul>
                    <a href="https://www.linkedin.com/in/manuel-zavala-90952a188/"><FaLinkedin className="aboutIcon" /></a>
                    <a href="https://www.github.com/manzav95/" target="_blank"><FaGithub className="aboutIcon" /></a>                    
                </div>
            </div>
        </div>
    )
}



export default Manny;
