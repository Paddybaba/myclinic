import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function PopModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Scorecard</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Total Questions : {props.progress.total}</h4>
        <h4>Correct Answer : {props.progress.correct.length}</h4>
        <h4>Incorrect Answers : {props.progress.incorrect.length}</h4>
        <h4 style={{ fontWeight: "bolder" }}>
          Marks Obtained :{" "}
          {(props.progress.correct.length / props.progress.total) * 100}%
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopModal;
