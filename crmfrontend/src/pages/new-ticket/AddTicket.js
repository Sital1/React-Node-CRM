import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddTicketForm from "../../components/add-ticket/AddTicketForm";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import "./new-ticket.css";
import { shortText } from "../../util/validation";

const initialFormData = {
  subject: "",
  issueDate: "",
  description: "",
};

const initialFormError = {
  subject: false,
  issueDate: false,
  description: false,
};

const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormError);

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormDataError(initialFormError)
    const isSubjectValid = await shortText(formData.subject);

    setFormDataError({
      ...initialFormError,
      subject: !isSubjectValid,
    });

    console.log("Form submit request", formData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="New ticket" />
        </Col>
      </Row>
      <div>
        <Row>
          <Col>
            <AddTicketForm
              handleOnChange={handleOnChange}
              formData={formData}
              onSubmit={onSubmit}
              formDataError={formDataError}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AddTicket;
