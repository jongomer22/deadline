import React from 'react';
import '../../styles/AboutUs/devcard.scss'
import '../../styles/variables.scss';
import { FaLinkedin } from 'react-icons/fa';


function Lucious() {

    return (
        <div>
            <div className="card dev-card">
                <img src='https://media.licdn.com/dms/image/C5603AQHsJJSTjoE-5g/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=TjhMjpahllPGCHGkRwx_QgThBJkzisICGVaaFvKXwkU' className="card-img-top"></img>
                <div className="card-body">
                    <h3>Lucious Jackson</h3> 
                    <p className="card-text">I am 5 years experienced in study and use of HTML5, CSS3, and Vanilla JavaScript. 
                    I am also experienced in the use of the Adobe Creative Cloud Suite (PhotoShop, Adobe Illustrator, InDesign).
                    I constantly look for ways to self-improve and level-up so, I enrolled in, completed and am a recent Graduate of the University of California Davis Full-Stack Flex Accellerator where I have received Professional training on both Frontend/Client-Side and Backend/Server-Side Technologies. I have taken an interest in Database Administration field and wish to focus on that area of the Industry as I have developed a love for working with MySQL, PostgreSQL and MongoDB.
                    I look forward to applying my new skillset to the Employer that wishes to introduce and add a new face to their workforce that will be on-time and motivated to improve every day even after being hired!</p>
                    <h4>Skillset:</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>MySQL/PostgreSQL</li>
                        <li>PassportJS</li>
                        <li>Adobe Creative Cloud Suite</li>
                    </ul>
                    <a href="http://www.linkedin.com/in/lucious-x-jackson-9a4807155"><FaLinkedin className="aboutIcon" /></a>
                </div>
            </div>
        </div>
    )
}



export default Lucious;
