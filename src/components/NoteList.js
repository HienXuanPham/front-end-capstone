import { useState, useEffect } from "react";
import NewNoteForm from "./NewNoteForm";
import Note from "./Note.js";
import httpClient from "../httpClient";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

const NoteList = ({ userId }) => {
  const [notesState, setNotesState] = useState([]);

  useEffect(() => {
    httpClient
      .get(`${kBaseUrl}/users/${userId}/notes`)
      .then((response) => {
        setNotesState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addNewNote = (title, journal) => {
    const requestBody = {
      title: title,
      journal: journal,
    };
    return httpClient
      .post(`${kBaseUrl}/users/${userId}/notes`, requestBody)
      .then((response) => {
        setNotesState((notesState) => [...notesState, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteNote = (id) => {
    httpClient
      .delete(`${kBaseUrl}/users/${userId}/notes/${id}`)
      .then((response) => {
        const updatedNoteData = notesState.filter(
          (note) => note.note_id !== id
        );
        setNotesState(updatedNoteData);
      });
  };

  const notes = notesState.map((note) => {
    return <Note key={note.note_id} note={note} deleteNote={deleteNote} />;
  });

  return (
    <>
      <section>
        <h2>Your notes</h2>
        {notes}
      </section>
      <section>
        <NewNoteForm addNewNote={addNewNote} />
      </section>
    </>
  );
};

export default NoteList;
