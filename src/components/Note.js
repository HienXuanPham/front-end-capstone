import React from "react";

const Note = ({ note, deleteNote }) => {
  const deleteANote = () => {
    console.log(note.note_id);
    deleteNote(note.note_id);
  };
  return (
    <section>
      <h3>{note.title}</h3>
      <p>{note.journal}</p>
      <ul>
        <button onClick={deleteANote}>Delete</button>
      </ul>
    </section>
  );
};

export default Note;
