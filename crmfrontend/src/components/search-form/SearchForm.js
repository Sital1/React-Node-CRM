import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterSearchticket } from "../../pages/ticket-listing/ticketAction";

const SearchForm = () => {
  const dispatah = useDispatch();

  const handleOnChange = (e) => {
   
    const { value } = e.target;
    dispatah(filterSearchticket(value));
    
  };

  const handleKeyPress =e => {
    if(e.key === 'Enter'){
      e.preventDefault()
    }
  }

  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm={3}>
          Search:{" "}
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            name="searchStr"
            placeholder="Search ..."
            onChange={handleOnChange}
            onKeyPress={handleKeyPress}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
