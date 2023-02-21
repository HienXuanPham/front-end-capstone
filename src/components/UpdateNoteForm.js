// import React, { useState } from "react";
// import { Button, Form, Modal } from "react-bootstrap";

// const UpdateNoteForm = ({ updateNote }) => {
//   const [title, setTitle] = useState("");
//   const [journal, setJournal] = useState("");
//   const [show, setShow] = useState(false);

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   const formUpdateSubmit = (event) => {
//     event.preventDefault();
//     updateNote(title, journal);
//     setTitle("");
//     setJournal("");
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Update
//       </Button>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Update A Note</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 placeholder="Title"
//                 autoFocus
//                 rows={1}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Journal</Form.Label>
//               <Form.Control as="textarea" rows={3} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={(handleClose, formUpdateSubmit)}>
//             Update Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default UpdateNoteForm;
