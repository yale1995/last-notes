import { createContext, ReactNode, useContext, useState } from "react";

interface NoteFormContextProps {
  children: ReactNode;
}

interface NoteFormContextType {
  visibleForm: boolean;
  setVisibleForm: (newState: boolean) => void;
  title: string;
  setTitle: (newState: string) => void;
  description: string;
  setDescription: (newState: string) => void;
}

const initialValue = {
  visibleForm: false,
  setVisibleForm: () => {},
  title: "",
  setTitle: () => {},
  description: "",
  setDescription: () => {},
};

const NoteFormContext = createContext<NoteFormContextType>(initialValue);

export function NoteFormProvider({ children }: NoteFormContextProps) {
  const [visibleForm, setVisibleForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <NoteFormContext.Provider
      value={{
        visibleForm,
        setVisibleForm,
        title,
        setTitle,
        description,
        setDescription,
      }}
    >
      {children}
    </NoteFormContext.Provider>
  );
}

export function useNoteForm() {
  const context = useContext(NoteFormContext);
  const {
    visibleForm,
    setVisibleForm,
    title,
    setTitle,
    description,
    setDescription,
  } = context;

  return {
    visibleForm,
    setVisibleForm,
    title,
    setTitle,
    description,
    setDescription,
  };
}
