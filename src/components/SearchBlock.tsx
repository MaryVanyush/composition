import React from "react";

export interface ISearhc {
    logo: string;
    btnText: string;
    text: string;
}


export const SearchBlock: React.FC<ISearhc> = (props) => {
    const { logo, btnText,  text} = props;


    return(
        <div className="search-block">
            <img className="logo" src={logo} alt="" />
            <div className="search-container">
                <div className="search-input">
                    <input type="text" />
                    <button>{btnText}</button>
                </div>
                <div className="search-hint">Найдется все! Например, <span>{text}</span></div>
            </div>
        </div>
    )
}