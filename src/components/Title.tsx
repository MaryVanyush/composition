import React from "react";

export interface ILinks {
    linksTitle: string;
    href: string;
}

export interface ITitle {
    title: string;
    links?: ILinks[];
    date: string;
}

export const Title: React.FC<ITitle> = (props) => {
    const {title, links, date} = props;

    function renderLinks(link: ILinks){
        return <a href={link.href}>{link.linksTitle}</a>
    };
    
    
    return(
        <div className="title-container">
            <div className="title">{title}</div>
            <div className="title-links">
                {links ? links.map((link)=> renderLinks(link)) : <></>}
            </div>
            <div className="title-date">{date}</div>
        </div>
    )
}