import React from "react";
import ItemTypes from "../types/ItemTypes";
import { doSnapToGrid } from "../snapToGrid";
import { useDrop } from "react-dnd";

import BSContainer from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const Container = (props) => {
  const { snapToGrid } = props;

  // const [boxes, setBoxes] = React.useState({
  //   a: { top: 20, left: 80, title: "Drag me around" }
  // });

  const [, drop] = useDrop({
    accept: ItemTypes.MATERIAL,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      if (snapToGrid) {
        [left, top] = doSnapToGrid(left, top);
      }
      item.moveBox(left, top);
      return undefined;
    }
  });
  return (
    <BSContainer>
      <Row
        ref={drop}
        style={{ width: "100%", height: "300px", border: "1px solid #3B3B3B" }}
      ></Row>
    </BSContainer>
  );
};
export default Container;
