import React from 'react';
import '../../styles/AboutUs/devcard.scss'
import '../../styles/variables.scss';
import { FaLinkedin } from 'react-icons/fa';



function Patrick() {

    return (
        <div>
            <div className="card dev-card">
            
                <img src="https://avatars2.githubusercontent.com/u/48222005?s=460&v=4" className="card-img-top"></img>
                    <div className="card-body">
                    <h3>Patrick Owens</h3>
                    <p className="card-text">Co-Owner of Osom Creative Studio, contract analyst for the State of California, and Full-Stack Web Developer. Specializes in analysis of tedious government codes & regulations, creation of written content for social media marketing campaigns. Looking to put newly acquired web development skills to good use in support of my business.</p>
                    <h4>Skillset:</h4>
                    <ul>
                        <li>HTML5/CSS/JS</li>
                        <li>ReactJS/JSX</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>NodeJS</li>
                    </ul>
                    

                    <a href='https://www.linkedin.com/in/patrick-owens-9a99b7163/'><FaLinkedin className="aboutIcon" /></a>
                    
                    
                        
                </div>
            </div>
        </div>
    )
}



export default Patrick;