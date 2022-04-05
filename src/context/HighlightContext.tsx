import {createContext, ReactNode, useContext, useState} from 'react';

interface HighlightContextProps {
    children: ReactNode;
}

interface HighlightContextType {
    highlight: any,
    setHighlight: (newState: any ) => void,
}

const initialValue = {
    highlight: false,
    setHighlight: () => {},
}

const HighlightContext = createContext<HighlightContextType>(initialValue);

export function HighlightProvider ({children}: HighlightContextProps) {
    const [highlight, setHighlight] = useState(false)

    return (
        <HighlightContext.Provider value={{highlight, setHighlight}}>
            {children}
        </HighlightContext.Provider>
    )
}

export function useHighlight() {
    const context = useContext(HighlightContext)
    const {highlight, setHighlight} = context


    return {highlight, setHighlight} 
}