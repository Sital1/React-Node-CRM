import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

import { loginPending, loginSuccess, loginError } from "./LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from '../../api/userApi';
import { useNavigate } from "react-router-dom";


const Login = ({ formSwitcher }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const {isLoading, isAuth, error} = useSelector(state => state.login)


  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!password || !email) {
      alert("submit both the field");
    }

    // is loading before the api call
    dispatch(loginPending());

    //  call the api
    try{
      const isAuth = await userLogin({email,password})
      console.log(isAuth);

      if(isAuth.status === "error"){
        return dispatch(loginError(isAuth.message))
      }
      dispatch(loginSuccess())
      navigate("/dashboard")
    }catch(error){
      dispatch(loginError(error.message))
    }

  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Login</h1>
            <hr />
            {error && <Alert variant="danger">{error}</Alert>}
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Eamil Address: </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <div className="text-center mt-4">
                <Button className="text-center" type="submit">
                  Login
                </Button>
                {isLoading && <Spinner variant="primary" animation="border" />}
              </div>
            </Form>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="#!" onClick={() => formSwitcher("reset")}>
              Forgot password?
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

Login.propTypes = {
  formSwitcher: PropTypes.func.isRequired,
};
