import React from "react";
import "../styles/card.scss";
import "../styles/variables.scss";



function Card(props) {

    return (
        <div>
            <div className="card">
                <img src={props.imageURL} className="card-img-top" alt={props.name} clicked={props.clicked}></img>
                <div className="card-body">
                    <p className="card-text">{props.name}</p>
                    <h3>Developer info with pictures and links, coming soon</h3>
                </div>
            </div>
        </div>
    )
}



export default Card;