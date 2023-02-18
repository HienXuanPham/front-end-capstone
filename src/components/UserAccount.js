import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import NewNoteForm from "./NewNoteForm";
import Note from "./Note.js";
import { useParams } from "react-router-dom";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

const UserAccount = () => {
  const UserId = () => {
    let params = useParams();
    return params.userId;
  };
  let paramsId = UserId();

  const [notesState, setNotesState] = useState([]);

  useEffect(() => {
    axios
      .get(`${kBaseUrl}/users/${paramsId}/notes`)
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
    return axios
      .post(`${kBaseUrl}/users/${paramsId}/notes`, requestBody)
      .then((response) => {
        setNotesState((notesState) => [...notesState, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteNote = (id) => {
    axios
      .delete(`${kBaseUrl}/users/${paramsId}/notes/${id}`)
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

  /** ----- External API ----- */
  const [quote, setQuote] = useState("");

  const handleQuote = (quote) => {
    setQuote(quote);
  };

  const getRandomQuote = (quotes) => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  };

  const getQuote = () => {
    return axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        return response.data;
      })
      .then((quotes) => {
        return getRandomQuote(quotes);
      })
      .catch(() => {
        console.log("error");
      });
  };

  useEffect(() => {
    const loadQuote = async () => {
      const quote = await getQuote();
      if (quote.author === null) {
        quote.author = "Unknow";
      }
      handleQuote(`${quote.text} - ${quote.author}`);
      //return `${quote.text} - ${quote.author}`;
      return;
    };
    loadQuote();
  }, []);

  return (
    <div>
      <h2>Hi {paramsId}! This is your page</h2>
      <p>{quote}</p>
      <section>
        <h2>Your notes</h2>
        {notes}
      </section>
      <section>
        <NewNoteForm addNewNote={addNewNote} />
      </section>
    </div>
  );
};

export default UserAccount;
