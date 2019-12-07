import React from 'react';
import './footer.css'

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer text-center">
                <div className="footerContainter">
                    <p className="footer-text">Copyright 2019 Deadline. All rights reserved</p>
                </div>
            </footer>
        );
    }
}

export default Footer;