import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import SearchForm from "../../components/search-form/SearchForm";
import TicketTable from "../../components/ticket-table/TicketTable";
import ticket from "../../assets/data/dummy-tickets.json";

const TicketList = () => {
  const [searchStr, setSearchStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState(ticket);

  useEffect(() => {

  }, [searchStr, displayTicket]);

  const searchTicket = (str) => {
    const displayTickets = ticket.filter((row) =>
      row.subject.toLowerCase().includes(str.toLowerCase())
    );
    setDisplayTicket(displayTickets)
  };

  const handleOnChange = (e) => {
      const {value} = e.target
    setSearchStr(value);
    searchTicket(value);
  };



  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Ticket Listing" />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Button variant="dark">Add new Ticket</Button>
        </Col>

        <Col className="text-end">
          <SearchForm handleOnChange={handleOnChange} str={searchStr} />
        </Col>
      </Row>
      <hr />

      <Row>
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketList;
