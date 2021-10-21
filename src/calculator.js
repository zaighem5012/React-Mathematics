import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
const Calculator = () => {
  return (
    <header>
        <Container>
      <Row>
        <Col>
          <a href="{}">Calculator</a>
        </Col>
        <Col>
          <a href="{}">ADDITION</a>
          <a href="{}">MULTIPLICATION</a>
          <a href="{}">DIVISON</a>
          <a href="{}">SUBSTRACTION</a>
        </Col>
      </Row>
      </Container>
    </header>
  );
};

export default Calculator;
