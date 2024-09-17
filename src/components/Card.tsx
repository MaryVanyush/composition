import React from "react";
import './Card.css'

export interface ICard {
    title: string;
    text: string;
    src?: string;
}

export const Card: React.FC<ICard> = (props) => {
    const {title, text, src} = props;

    const imgTag = <img className="card-img" src={src} alt="image-card" />

    return(
        <div className="card-box">
            <div className="card">
                {src ? imgTag : <></>}
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{text}</p>
                    <button className="card-btn">Go somewhere</button>
                </div>
                
            </div>
        </div>
    )
}