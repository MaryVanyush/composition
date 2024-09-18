import React from "react";

export interface ICard {
    title: string;
    text: string;
    src: string;
    href: string
}

export const HeadlinePersonal: React.FC<ICard> = (props) => {
    const {title, text, src, href} = props;

    return(
            <a className="card" href={href}>
                <img className="card-img" src={src} alt="image-card" />
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{text}</p>
            </a>
    )
}