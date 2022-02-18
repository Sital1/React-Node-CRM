import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const TicketTable = ({  }) => {


  const {searchTicketList, isLoading, error} = useSelector(state=>state.tickets)


  if(isLoading) return <h3>Loading ...</h3>
  if(error) return <h3>{error}</h3>


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
        {searchTicketList.length ? (
          searchTicketList.map((row) => {
            return (
              <tr key={row._id}>
                <td>{row._id}</td>
                <td>
                  <Link
                    className="text-decoration-none"
                    to={`/ticket/${row._id}`}
                  >
                    {row.subject}
                  </Link>
                </td>
                <td>{row.status}</td>
                <td>{row.createdAt}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No Tickets
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TicketTable;

