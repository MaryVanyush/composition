import { ReactNode } from "react";

interface WidgetProps {
    children: ReactNode;
}
export default function Widget({children}: WidgetProps) {
    return (
    <div className='card-group'>
        {children}
    </div>
    )
}
