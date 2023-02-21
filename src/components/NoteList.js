import { useState, useEffect, useContext } from "react";
import NewNoteForm from "./NewNoteForm";
import Note from "./Note.js";
import httpClient from "../httpClient";
import { UserContext } from "../UserContext";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

const NoteList = () => {
  const [notesState, setNotesState] = useState([]);
  const { currentUserId } = useContext(UserContext);
  const userId = currentUserId;

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

  const updateNote = async (noteId, title, journal) => {
    const requestBody = {
      title: title,
      journal: journal,
    };
    return await httpClient
      .put(`${kBaseUrl}/users/${userId}/notes/${noteId}`, requestBody)
      .then((response) => {
        let notesUpdated = notesState.map((note) => {
          if (note.note_id === response.note_id) {
            return {
              ...note,
              title: response.title,
              journal: response.journal,
            };
          }
          return note;
        });
        setNotesState(notesUpdated);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const notes = notesState.map((note) => {
    return (
      <Note
        key={note.note_id}
        note={note}
        deleteNote={deleteNote}
        updateNote={updateNote}
      />
    );
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
