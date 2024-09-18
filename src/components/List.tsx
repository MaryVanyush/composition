import React from "react";

export interface IListsData {
    imgLink?: string;
    time?: string;
    title: string;
    href: string;
    description?: string;
}

export interface IList {
    data?: IListsData[];
}

export const List: React.FC<IList> = (props) => {
    const { data } = props;

    function renderNews(item: IListsData){
        return <li className="news-item">
                    <a href={item.href} className="news-link">
                        {item.imgLink ? <img src={item.imgLink} alt="" className="news-img"/> : <></>}
                        {item.time ? <div className="news-time">{item.time}</div> : <></>}
                        <h4 className="news-title">{item.title}</h4>
                        {item.description ? <div className="news-description">{item.description}</div> : <></>}
                    </a>
                </li>
    };

    return(
        <ul className="list-container">
            {data ? data.map((item)=> renderNews(item)) : <></>}
        </ul>
    )
}