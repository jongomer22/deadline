import React from 'react';
import '../../styles/AboutUs/devcard.scss'
import '../../styles/variables.scss';
import { FaLinkedin } from 'react-icons/fa';



function Jeff() {

    return (
        <div>
            <div className="card dev-card">
                <img src="https://media.licdn.com/dms/image/C5603AQG51vY3J2NrMg/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=5J70va6sfQZhCKHSqaQw_--pnbKOT8gDhnE4rpPkG-c" className="card-img-top"></img>
                <div className="card-body">
                    <h3>Jeffery Saephan</h3>
                    <p className="card-text"> I'm a recent graduate from the UC Berkeley extension emphasizing in the MERN stack. I am also currently pursuing my cloud practitioner certification.  </p>
                    <h4>Skillset:</h4>
                    <ul>
                        <li>HTML/CSS/JS</li>
                        <li>NodeJs</li>
                        <li>ReactJs</li>
                        <li>Express</li>
                        <li>SQL/MongoDB</li>
                    </ul>
                    <a href="https://www.linkedin.com/in/jeffery-saephan-b4aa1985/"><FaLinkedin className="aboutIcon" /></a>
                </div>
            </div>
        </div>
    )
}



export default Jeff;