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
        <Modal.Title id="contained-modal-title-vcenter">
          You have Finished the test
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Your Scorecard : </h4>
        <p>Total Questions : {props.progress.total}</p>
        <p>Correct Answer : {props.progress.correct.length}</p>
        <p>Incorrect Answers : {props.progress.incorrect.length}</p>
        <p>
          Marks Obtained :{" "}
          {(props.progress.correct.length / props.progress.total) * 100}%
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopModal;
