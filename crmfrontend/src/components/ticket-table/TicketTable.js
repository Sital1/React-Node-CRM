import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from 'prop-types'

const TicketTable = ({ tickets }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Open date</th>
        </tr>
      </thead>

      <tbody>
        {tickets.length ? (
          tickets.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.subject}</td>
                <td>{row.status}</td>
                <td>{row.createdAt}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="4" className="text-center">No Tickets</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TicketTable;


TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired
}