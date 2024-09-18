import { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode;
}

export default function Header({children}: HeaderProps) {
    return (
        <div className="header-container">
            {children}
        </div>
    )
}