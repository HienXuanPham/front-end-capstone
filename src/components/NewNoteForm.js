import React, { useState } from "react";

const NewNoteForm = ({ addNewNote }) => {
  const [title, setTitle] = useState("");
  const [journal, setJournal] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleJournal = (event) => {
    setJournal(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    addNewNote(title, journal);
    setTitle("");
    setJournal("");
  };

  return (
    <section>
      <h2>Create Your Journal</h2>
      <form onSubmit={formSubmit}>
        <label>Title</label>
        <br />
        <textarea value={title} onChange={handleTitle} />
        <br />
        <label>Journal</label>
        <br />
        <textarea value={journal} onChange={handleJournal} />
        <br />
        <input type="submit" value="Save" />
      </form>
    </section>
  );
};

export default NewNoteForm;
