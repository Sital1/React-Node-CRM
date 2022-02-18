import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import SearchForm from "../../components/search-form/SearchForm";
import TicketTable from "../../components/ticket-table/TicketTable";
import ticket from "../../assets/data/dummy-tickets.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllTickets } from './ticketAction'

const TicketList = () => {
  const dispatah = useDispatch();
  const [searchStr, setSearchStr] = useState("");
 

  useEffect(() => {
    dispatah(fetchAllTickets())
  }, [searchStr]);


  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Ticket Listing" />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
         <Link to="/add-ticket"><Button variant="dark">Add new Ticket</Button></Link> 
        </Col>

        <Col className="text-end">
          <SearchForm />
        </Col>
      </Row>
      <hr />

      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketList;
