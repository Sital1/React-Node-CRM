import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import tickets from "../../assets/data/dummy-tickets.json";
import MessageHistory from "../../components/message-history/MessageHistory";
import UpdateTicket from "../../components/update-ticket/UpdateTicket";
import { useParams } from "react-router-dom";




const Ticket = () => {
  const { id } = useParams()
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for(let ticket of tickets){
      if (ticket.id == id){
        setTicket(ticket);
        break;
      }
    }
  }, [message,id]);

  const handleOnChnage = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert("submitted");
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <BreadCrumb page="Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Issued Date: {ticket.createdAt}</div>
          <div className="status">Detail: {ticket.status}</div>
        </Col>
        <Col>
          <div className="text-end">
            <Button variant="outline-dark"> Close Ticket</Button>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
       <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col> 
      </Row>
      <hr className="mt-5"/>

      <Row className="mt-5">
        <UpdateTicket
          message={message}
          handleOnChnage={handleOnChnage}
          onSubmit={handleOnSubmit}
        />
      </Row>
    </Container>
  );
};

export default Ticket;
