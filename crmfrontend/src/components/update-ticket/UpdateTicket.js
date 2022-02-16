import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const UpdateTicket = ({ message, handleOnChnage, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Label>Reply</Form.Label>
      <br />
      <Form.Text>Please Reply your message or update the ticket</Form.Text>
      <Form.Control
        as="textarea"
        row="5"
        name="detail"
        value={message}
        onChange={handleOnChnage}
      />

      <div className="text-end mt-3 mb-3">
        <Button variant="dark" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

export default UpdateTicket;

UpdateTicket.propTypes = {
  message: PropTypes.string.isRequired,
  handleOnChnage: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
