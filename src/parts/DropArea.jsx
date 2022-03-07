import React from "react";
import BSContainer from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const Container = () => {
  return (
    <BSContainer>
      <Row
        style={{ width: "100%", height: "300px", border: "1px solid #3B3B3B" }}
      ></Row>
    </BSContainer>
  );
};
export default Container;
