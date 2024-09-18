import React from "react";

export interface ICurrencyArray {
    array?: string[];
}

export const Currency: React.FC<ICurrencyArray> = (props) => {
    const { array } = props;

    function renderData(item: string){
        return <div className="currency-item">{item}</div>
    };

    return(
        <div className="currency-container">
            {array ? array.map((item)=> renderData(item)) : <></>}
        </div>
    )
}