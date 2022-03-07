import React from "react";
import ItemTypes from "../types/ItemTypes";
import doSnapToGrid from "../snapToGrid";
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
      console.log(delta);
      console.log(monitor.getInitialClientOffset());
      console.log(monitor.getInitialSourceClientOffset());
      console.log(monitor.getClientOffset());
      console.log(monitor.getSourceClientOffset());
      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      console.log("before:" + top + ":" + left);
      if (snapToGrid) {
        [left, top] = doSnapToGrid(left, top);
        console.log("snap:" + top + ":" + left);
      }
      item.moveBox(left, top);
      return undefined;
    }
  });

  const gridNum = Math.floor(298 / 32);
  console.log(gridNum);
  const gridArr = [...Array(32)].map((i) => 0);

  return (
    <BSContainer>
      <Row
        ref={drop}
        style={{
          width: "100%",
          height: "300px",
          border: "1px solid #3B3B3B",
          overFlow: "hidden"
        }}
      >
        {gridArr.map((_, i) => {
          return (
            <span
              style={{
                borderTop: "1px solid darkgray",
                borderBottom: "1px solid darkgray",
                height: "7px",
                marginTop: "9px",
                background: "transparent"
              }}
            ></span>
          );
        })}
      </Row>
    </BSContainer>
  );
};
export default Container;
