import { useEffect } from "react";
import { FaBan, FaCheck } from "react-icons/fa";
import { useHighlight } from "../../context/HighlightContext";
import { useNoteForm } from "../../context/NoteFormContext";
import { useNoteList } from "../../context/NoteListContext";

import styled from "./styles.module.scss";

export function NoteForm() {
  const { title, setTitle } = useNoteForm();
  const {description, setDescription} = useNoteForm()

  const {highlight, setHighlight} = useHighlight()

  const {noteList, setNoteList} = useNoteList()

  const {visibleForm, setVisibleForm} = useNoteForm()

  useEffect(() => {saveLocalNotes()}, [noteList])


  function titleHandler(event: any) {
    setTitle(event.target.value);
    console.log(title)
  }

  function descriptionHandler(event: any) {
    setDescription(event.target.value);
    console.log(description)
  }

  function submitHandler(event: any) {
    event.preventDefault()

    if(highlight) {
      noteList.map((note) => {
        if(note.id === highlight) {
          note.title = title;
          note.description = description
        }
      })

      setNoteList([...noteList])

    } else {
      setNoteList([...noteList,
        {
          id: String(Math.floor(Math.random() * 1000)),
          title: title,
          description: description
        }])
    }

  }

  function cancelHandler(event: any) {
    event.preventDefault()
    setHighlight(false)
    setVisibleForm(false)
  }

  function saveLocalNotes() {
    localStorage.setItem('notes', JSON.stringify(noteList))
  }

  return (
    <form className={styled.noteMenu}>
      <div>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          placeholder="Informe um título"
          onChange={titleHandler}
          value={title}
        />
      </div>
      <div>
        <label htmlFor="note">Notas</label>
        <textarea
          id="note"
          rows={10}
          placeholder="Escreva a sua nota"
          onChange={descriptionHandler}
          value={description}
        ></textarea>
      </div>
      <div className={styled.buttons}>
        <button onClick={cancelHandler}>
          <FaBan className={styled.icon} />
        </button>
        <button type='submit' onClick={submitHandler}>
          <FaCheck className={styled.icon} />
        </button>
      </div>
    </form>
  );
}
