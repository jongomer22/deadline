import React from 'react';
import '../../styles/AboutUs/devcard.scss'
import '../../styles/variables.scss';
import { FaLinkedin } from 'react-icons/fa';



function Meena() {

    return (
        <div>
            <div className="card dev-card">
                <img src="https://media.licdn.com/dms/image/C5603AQG51vY3J2NrMg/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=5J70va6sfQZhCKHSqaQw_--pnbKOT8gDhnE4rpPkG-c" className="card-img-top"></img>
                <div className="card-body">
                    <h3>Meena</h3>
                    <p className="card-text">Full stack web developer cum Automation Tester. Working on test automation of web applications for years made me curious to learn about building websites. Taking the full-stack web development bootcamp course at UC Davis extension never failed to surprise me everyday with interesting technologies and frameworks.
                    Building web applications are real fun.</p>
                    <h4>Skillset:</h4>
                    <ul>
                        <li>HTML/CSS/JS</li>
                        <li>NodeJs</li>
                        <li>ReactJs</li>
                        <li>Express</li>
                        <li>SQL/MongoDB</li>
                    </ul>
                    <a href="http://www.linkedin.com/in/selvameena-s"><FaLinkedin className="aboutIcon" /></a>
                </div>
            </div>
        </div>
    )
}



export default Meena;