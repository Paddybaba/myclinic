import React, { useState } from "react";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../red/actions";

const AdminLogin = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const onLoginClick = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("http://localhost:3030/adminLogin", {
        username,
        password,
      })
      .catch((err) => {
        if (!err.response) {
          alert("Could not connect to the server");
        } else {
          alert(err.response.data.error);
        }
      });
    if (!response) {
      return;
    } else {
      if (response.data.code === "success") {
        dispatch(userLogin(response.data.user));
        history.push({
          pathname: "/admindashboard",
          // state: {
          //   data: response.data,
          // },
        });
      } else if (response.data.code === "err") {
        alert("Invalid Credentials");
      }
    }
  };

  // const myState = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  // function showState(e) {
  //   e.preventDefault();
  //   console.log(myState);
  // }
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
          <Form.Group size="lg" controlId="username">
            <Form.Label>Admin Identity</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            className="mt-4"
            type="submit"
            disabled={!validateForm()}
            onClick={onLoginClick}
          >
            Login
          </Button>
          {/* <button onClick={showState}>Show State</button> */}
        </Form>
      </div>
    </div>
  );
};
export default AdminLogin;
