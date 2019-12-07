import React from 'react';
import '../../styles/AboutUs/devcard.scss'
import '../../styles/variables.scss';
import { FaLinkedin } from 'react-icons/fa';


function Muey() {

    return (
        <div>
            <div className="card dev-card">
            
                <div className="card-body">
                    <h3>Muey Surigao</h3>
                    <p className="card-text">Graduated from SFSU and decided that I wanted to change career. Started Full Stack Web Development program. In pursuit of attaining a front end developer career. In-depth knowledge of HTML5, CSS3, and JavaScript with the prime focus of developing unique and stunning websites that are desktop and mobile user-friendly.</p>
                    <h4>Skillset:</h4>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>ReactJs</li>
                    </ul>
                    <a href="https://www.linkedin.com/in/muey-liam-surigao/"><FaLinkedin className="aboutIcon" /></a>

                </div>
            </div>
        </div>
    )
}



export default Muey;