import { ReactNode } from "react";

interface WidgetProps {
    title?: string;
    children: ReactNode;
    type: 'header' | 'links';
}

export default function Widget({title, children, type}: WidgetProps) {
    return (
        <div className={type}>
            {title ? <h3  className="links-title">{title}</h3> : <></>}
            {children}
        </div>
    )
}
