import React from 'react';
import '../../styles/AboutUs/devcard.scss'
import '../../styles/variables.scss';
import { FaLinkedin } from 'react-icons/fa';


function Manny() {

    return (
        <div>
            <div className="card dev-card">
                
                <div className="card-body">
                    <h3>Manuel Zavala</h3> 
                    <p className="card-text">I am a Junior Developer with experience in many stacks and libraries, including HTML5, CSS3, JavaScript, and ReactJS. 
                    I constantly look for ways to self-improve and level-up so, I enrolled in, completed and am a recent Graduate of the University of California Berkeley Extension Full-Stack program where I have received Professional training on both Frontend/Client-Side and Backend/Server-Side Technologies. I have taken an interest in Database Administration field and wish to focus on that area of the Industry as I have developed a love for working with MySQL, NodeJS and MongoDB.
                    I look forward to applying my new skillset to the Employer that wishes to introduce and add a new face to their workforce that will be on-time and motivated to improve every day even after being hired!</p>
                    <h4>Skillset:</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>JavaScript</li>
                        <li>HTML5/CSS3--Lucious</li>
                    </ul>
                    <a href="https://www.linkedin.com/in/manuel-zavala-90952a188/"><FaLinkedin className="aboutIcon" /></a>
                </div>
            </div>
        </div>
    )
}



export default Manny;
