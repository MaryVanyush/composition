import React from "react";

export interface IMenu {
    title: string;
    href: string;
}

export interface IMenuArray {
    array: IMenu[];
}

export const Menu: React.FC<IMenuArray> = (props) => {
    const { array } = props;

    function renderData(item: IMenu){
        return <li className="menu-item"><a href={item.href}>{item.title}</a></li>
    };

    return(
        <ul className="menu-list">
            {array ? array.map((item)=> renderData(item)) : <></>}
        </ul>
    )
}