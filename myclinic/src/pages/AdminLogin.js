import React, { useState } from "react";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "./Login.css";

const AdminLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/admindashboard");
  }

  return (
    <div className="Login row">
      <div className="col-10 mx-auto">
        <div className="admin-title ">
          <a href="/">
            <img
              src="https://live.staticflickr.com/65535/51537856857_a459c3a29c_m.jpg"
              alt="Logo"
              className="logo"
            />
          </a>
        </div>
        <div className="admin-title">Administrator Login</div>
        <Form>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Admin Identity</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            block
            className="mt-4"
            type="submit"
            disabled={!validateForm()}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default AdminLogin;
