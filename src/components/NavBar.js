import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import List from "./List";

function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <nav
        className="navbar sticky-top navbar-light bg-dark flex"
        style={{ paddingLeft: "30px" }}
      >
        <Form className="d-flex">
          <h1 className="navbar-brand text-light">Rick and Morty Characters</h1>
          <Form.Control
            type="search"
            placeholder="Search Character"
            className="me-3"
            aria-label="Search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <Button variant="primary">Search</Button>
        </Form>
      </nav>
      <List searchTerm={searchTerm} />
    </>
  );
}

export default NavBar;
