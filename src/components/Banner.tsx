import React from "react";

export interface IBanner {
    url: string;
}


export const Banner: React.FC<IBanner> = (props) => {
    const { url } = props;


    return(
        <div className="banner-block">
            <img className="banner" src={url} alt="" />
        </div>
    )
}