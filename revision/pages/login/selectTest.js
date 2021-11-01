import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

const selectTest = (props) => {
  // console.log("select page props", props);
  const [mystudent, setStudent] = useState(props.student.user.student);
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  function validateForm() {
    return subject.length > 0 && author.length > 0 && year.length > 0;
  }

  const router = useRouter();
  // console.log(subject);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h3 className="col-10 text-center mx-auto">
              Welcome : {mystudent}
            </h3>
            <h3>Select your test paper</h3>

            <div className="row">
              <div className="col-10 mx-auto">
                <Form>
                  <Form.Group size="lg" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setSubject(e.target.value)}
                      defaultValue="science"
                    >
                      <option value="mathematics">Mathematics</option>
                      <option value="generalknowledge">
                        General Knowledge
                      </option>
                      <option value="science">Science</option>
                      <option value="english">English</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="mt-4" size="lg" controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mt-4" size="lg" controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      type="text"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    block="true"
                    className="mt-4"
                    disabled={!validateForm()}
                    onClick={() => console.log("submitted")}
                  >
                    Login
                  </Button>
                </Form>
                <Button
                  block="true"
                  className="mt-4"
                  // type="submit" (This is not allowing action to work properly)
                  onClick={() => router.push("/login/loginPage")}
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mdtp = (dispatch) => ({});
const mstp = (state) => ({
  student: state.studentReducer,
});
export default connect(mstp, mdtp)(selectTest);
