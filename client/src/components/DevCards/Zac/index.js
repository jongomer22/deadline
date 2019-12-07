import React from 'react';
import '../../styles/AboutUs/devcard.scss'
import '../../styles/variables.scss';
import { FaLinkedin } from 'react-icons/fa';



function Zac() {

    return (
        <div>
            <div className="card dev-card">
                <img src="https://media.licdn.com/dms/image/C5603AQEtRCIEnLm7vg/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=xJ0fzxtQu-aWfdoUYb9HD0U7EZftF4XStkeBVyp4r24" className="card-img-top"></img>
                <div className="card-body">

                    <h3>Zac Warner</h3>
                    <p className="card-text">I’m a highly motivated Full Stack Web developer with a deep understanding of Java, HTML, and CSS.
                    I enjoy using cutting edge technology to tackle challenges and create efficient solutions to problems. I’m a quick learner and strive to quickly become an asset to whoever I work with quickly becoming the go-to guy for problems or important tasks. After taking a coding class in college, I fell in love with it and decided to skip the traditional learning environment for something more cutting edge. </p>
                    <h4>Skillset:</h4>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>SocketIo</li>
                        <li>Node</li>
                        <li>Passport</li>
                    </ul>
                    <a href="https://www.linkedin.com/in/zac-warner-5a8079122/"><FaLinkedin className="aboutIcon" /></a>


                </div>
            </div>
        </div>
    )
}



export default Zac;