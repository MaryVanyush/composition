import React from "react";

export interface IWeather {
    icon: string;
    currentTemperature: string;
    morningTemperature: string;
    nihgtTemperature: string;
}


export const Weather: React.FC<IWeather> = (props) => {
    const { icon, currentTemperature,  morningTemperature, nihgtTemperature} = props;


    return(
        <div className="block-weather">
            <img className="icon-weather" src={icon} alt="" />
            <div className="current-weather">{currentTemperature}</div>
            <div className="other-weather">
                <span className="morning">Утром {morningTemperature}</span>
                <span className="night">Вечером {nihgtTemperature}</span>
            </div>
        </div>
    )
}