import React, { useState } from "react";
import Head from "next/head";
import Sample from "../src/components/Sample";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const loginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    try {
      const resposne = await axios.post("http://localhost:8080/login", {
        username: email,
        password: password,
      });
      const data = await resposne.data;
      if (resposne.status === 400 || !data) {
        window.alert("Invalid Credentials !!!");
      } else {
        console.log(data);
        alert("Login Successful");
      }
    } catch (err) {
      alert("Invalid credentials !!!");
      console.log(err.message);
    }
  }

  return (
    <div className="row mt-5">
      <Head>
        <title>Student Login</title>
      </Head>
      <div className="col-5 mx-auto">
        <div className="text-center text-uppercase fs-3 fw-bold mt-5">
          Student Login
        </div>
        <Form>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Student ID</Form.Label>
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
            block="true"
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

export default loginPage;
