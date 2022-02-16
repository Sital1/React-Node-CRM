import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import PropTypes from 'prop-types';

const Login = ({handleOnChange, email, password, onSubmit, formSwitcher}) => {


  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Login</h1>
            <hr />
            <Form autoComplete="off" onSubmit={onSubmit}>
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
            <Button className="text-center" type="submit">Login</Button>
            </div>
            </Form>
            <hr />
          </Col>
        </Row>


        <Row>
            <Col>
            <a href="#!" onClick={()=>formSwitcher("reset")}>Forgot password?</a>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

Login.propTypes={
  handleOnChange : PropTypes.func.isRequired,
  formSwitcher : PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}