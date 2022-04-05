import { ReactNode } from "react";
import { useNoteForm } from "../../context/NoteFormContext";
import { NoteForm } from "../NoteForm/index";

import styled from "./styles.module.scss";

interface NotesAreaProps {
  children: ReactNode;
}
export function NotesArea({ children }: NotesAreaProps) {
  const {visibleForm} = useNoteForm()
  return (
    <article className={styled.notesArea}>
      {children}
      { visibleForm && <NoteForm/>}
    </article>
  );
}
