import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket.css"


const AddTicketForm = ({ onSubmit, handleOnChange, formData, formDataError }) => {
  return (
    <div className="mt-5 add-new-ticket" >
      <h1 className="text-info text-center">Add new Ticket</h1>
      <hr/>
      <Form autoComplete="off" onSubmit={onSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={formData.subject}
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">{formDataError.subject && "Subject is required"}</Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <div className="text-center mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTicketForm;

AddTicketForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired
};
