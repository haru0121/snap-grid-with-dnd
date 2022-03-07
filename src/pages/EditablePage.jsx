import React from "react";
import { Container as BSContainer, Row, Col } from "react-bootstrap";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
const Container = () => {
  return (
    <BSContainer>
      <h4>画像を選んで配置</h4>
      <Row>
        <Col style={{ background: "lightgray", height: "100vh" }}>
          画像リスト
        </Col>
        <Col xs={8}>Drop zone</Col>
      </Row>
    </BSContainer>
  );
};
export default Container;
