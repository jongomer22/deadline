import React from 'react';
import '../../styles/AboutUs/devcard.scss'
import '../../styles/variables.scss';
import { FaLinkedin } from 'react-icons/fa';



function Jeremy() {

    return (
        <div>
            <div className="card dev-card">
                
                <div className="card-body">

                    <h3>Jeremy Smith</h3>
                    <p className="card-text">I am a Business Graduate from Sacramento State University with 15 years of management and sales experience. Looking for a change in my field of work, I enrolled in a fullstack web development course out of UC Berkeley where I was professionally trained in both front and back end development. With years of management experience and a passion for technology, I'm looking forward to a career in project management.   </p>
                    <h4>Skillset:</h4>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>SocketIo</li>
                        <li>Node</li>
                        <li>Passport</li>
                    </ul>
                    <a href="https://www.linkedin.com/in/jeremy-smith-ab31a953/"><FaLinkedin className="aboutIcon" /></a>


                </div>
            </div>
        </div>
    )
}



export default Jeremy;