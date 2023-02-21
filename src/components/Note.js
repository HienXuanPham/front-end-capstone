import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Note = ({ note, deleteNote, updateNote }) => {
  const deleteANote = () => {
    console.log(note.note_id);
    deleteNote(note.note_id);
  };

  const updateANote = (title, journal) => {
    updateNote(note.note_id, title, journal);
  };

  const [title, setTitle] = useState("");
  const [journal, setJournal] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const formUpdateSubmit = (event) => {
    event.preventDefault();
    updateANote(title, journal);
    setTitle("");
    setJournal("");
  };

  return (
    <section>
      <h4>{note.title}</h4>
      <p>{note.journal}</p>
      <>
        <Button variant="danger" onClick={deleteANote}>
          Delete
        </Button>
        <>
          <Button variant="primary" onClick={handleShow}>
            Edit
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update A Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Title"
                    autoFocus
                    rows={1}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Journal</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) => setJournal(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={(e) => {
                  handleClose();
                  formUpdateSubmit(e);
                }}
              >
                Update Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </>
    </section>
  );
};

export default Note;
