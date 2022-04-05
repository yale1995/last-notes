import { createContext, ReactNode, useContext, useState } from "react";

interface NoteListContextProps {
    children: ReactNode;
}

interface Note {
    id: string;
    title: string;
    description: string;
}

interface NoteListContextType {
    noteList: Note[],
    setNoteList: (newState: Note[]) => void
}

const NoteListContext = createContext<NoteListContextType>({noteList:[], setNoteList: () => {}})

export function NoteListProvider({children}: NoteListContextProps) {
    const [noteList, setNoteList] = useState<Note[]>([])

    return (<NoteListContext.Provider value={{noteList, setNoteList}}>
        {children}
    </NoteListContext.Provider>)
    
}

export function useNoteList() {
    const context = useContext(NoteListContext)
    const {noteList, setNoteList} = context

    return {noteList, setNoteList} 
}
