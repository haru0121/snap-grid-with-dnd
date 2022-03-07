import React from "react";
import DropArea from "../parts/DropArea";
import DraggableMaterial from "../parts/DraggableMaterial";
import BSContainer from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const Container = () => {
  return (
    <BSContainer>
      <h4>画像を選んで配置</h4>
      <Row>
        <Col style={{ background: "lightgray", height: "100vh" }}>
          画像リスト
          <ul style={{ listStyle: "none" }}>
            <li>
              <DraggableMaterial id={"a"} title="dragme" />
            </li>
          </ul>
        </Col>
        <Col xs={8}>
          Drop zone
          <DropArea />
        </Col>
      </Row>
    </BSContainer>
  );
};
export default Container;
