import { ReactNode } from 'react';

import './styles.module.scss'

interface HeaderProps {
    children: ReactNode;
}


export function Header ({children}: HeaderProps) {
    return (
        <header>
            {children}
        </header>
    )
}