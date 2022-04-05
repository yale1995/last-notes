import { useHighlight } from '../../context/HighlightContext';
import { useNoteForm } from '../../context/NoteFormContext';
import styled from './styles.module.scss'

interface NoteProps {
  id: string;
  title: string;
  description: string;
}

export function Note({id, title, description}:NoteProps) {
  const {highlight, setHighlight} = useHighlight()
  const {setVisibleForm} = useNoteForm()

  return (
    <div className={`${styled.note} ${highlight=== id && styled.highlight}`} onClick={() =>{
      if(highlight === id) {
        setHighlight(false)
        setVisibleForm(false)
      } else {
        setHighlight(id)
        setVisibleForm(true)
      }
    }}>
      <h2 className={styled.title}>{title}</h2>
      <hr />
      <p className={styled.description}>{description}</p>
    </div>
  );
}
