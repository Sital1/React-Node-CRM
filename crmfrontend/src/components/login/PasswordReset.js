import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

const PasswordReset = ({handleOnChange, email, formSwitcher, onResetSubmit}) => {


  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Reset password</h1>
            <hr />
            <Form autoComplete="off" onSubmit={onResetSubmit}>
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


             <div className="text-center mt-4">
            <Button className="text-center" type="submit">Login</Button>
            </div>
            </Form>
            <hr />
          </Col>
        </Row>


        <Row>
            <Col>
            <a href="#!" onClick={()=>formSwitcher("login")}>Login Now?</a>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PasswordReset;

PasswordReset.propTypes={
  handleOnChange : PropTypes.func.isRequired,
  formSwitcher : PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onResetSubmit: PropTypes.func.isRequired
}