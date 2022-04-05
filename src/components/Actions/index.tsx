import { useState } from "react";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import { useHighlight } from "../../context/HighlightContext";
import { useNoteForm } from "../../context/NoteFormContext";
import { useNoteList } from "../../context/NoteListContext";

import styled from "./styles.module.scss";

export function Actions() {
  const [teste, setTeste] = useState('')
  const { visibleForm, setVisibleForm, setTitle, setDescription } =
    useNoteForm();
  const { highlight, setHighlight } = useHighlight();
  const { noteList, setNoteList } = useNoteList();

  function createHandler() {
    if (visibleForm && highlight) {

      setTitle("");
      setDescription("");
      setHighlight(false);

    } else {
        setVisibleForm(!visibleForm)

      }
  }

  function editHandler() {
    if (highlight) {
      const highlightedNote: any = noteList.find(
        (note) => note.id === highlight.id
      );

      setTitle(highlightedNote.title);
      setDescription(highlightedNote.description);
      setVisibleForm(!visibleForm);
    }
  }

  function deleteHandler() {
    if (highlight) {
      setTitle("");
      setDescription("");
      setHighlight(false);

      const highlightedNote = noteList.findIndex(
        (note) => note.id === highlight
      );
      noteList.splice(highlightedNote, 1);

      setNoteList([...noteList]);
    }
  }

  return (
    <div className={styled.actions}>
      <button onClick={createHandler}>
        <FaPlus className={styled.icon} />
      </button>
      <button onClick={editHandler}>
        <FaPencilAlt
          className={styled.icon}
          id={`${!highlight && styled.disabled}`}
        />
      </button>
      <button onClick={deleteHandler}>
        <FaTrash
          className={styled.icon}
          id={`${!highlight && styled.disabled}`}
        />
      </button>
    </div>
  );
}
