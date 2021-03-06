import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from "../../components/ticket-table/TicketTable";
import tickets from "../../assets/data/dummy-tickets.json";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket">
            <Button variant="dark" size="lg">
              Add new ticket
            </Button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col className="text-center mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 500</div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-2">Recently added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
