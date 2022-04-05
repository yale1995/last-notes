import { Note } from "../Note/index";
import { useNoteList } from "../../context/NoteListContext";

import styled from "./styles.module.scss";
import { useHighlight } from "../../context/HighlightContext";
import { useNoteForm } from "../../context/NoteFormContext";
import { useEffect } from "react";

export function Notes() {
  const { noteList, setNoteList } = useNoteList();
  const { highlight, setHighlight } = useHighlight();
  const {setTitle, setDescription} = useNoteForm()

  useEffect(() => {getLocalNotes()}, [])

  useEffect(() => {
    if (highlight) {
      const highlightedNote: any = noteList.find((note) => note.id === highlight);

      setTitle(highlightedNote.title);
      setDescription(highlightedNote.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [highlight]);

  function getLocalNotes() {
    let localNotes:any = localStorage.getItem('notes');
    if(localNotes === null) {
      localStorage.setItem('notes', JSON.stringify([]))
    } else {
      localNotes = JSON.parse(localNotes)
      setNoteList(localNotes)
    }
  }

  return (
    <section className={styled.notes}>
      {noteList.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
        />
      ))}
    </section>
  );
}
