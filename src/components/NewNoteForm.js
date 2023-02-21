import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const NewNoteForm = ({ addNewNote }) => {
  const [title, setTitle] = useState("");
  const [journal, setJournal] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
    <section className="create-note">
      <Button variant="btn btn-primary btn-sm" onClick={handleShow}>
        Create A Note
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create A Note</Modal.Title>
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
                onChange={handleTitle}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Journal</Form.Label>
              <Form.Control as="textarea" rows={5} onChange={handleJournal} />
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
              formSubmit(e);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default NewNoteForm;
