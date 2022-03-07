import React from "react";
import ItemTypes from "../types/ItemTypes";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import Material from "../parts/Material";
import DropArea from "../parts/DropArea";
import BSContainer from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : ""
  };
}

const Container = (props) => {
  const { id, title } = props;
  const [position, setPosition] = React.useState({ left: 0, top: 0 });

  const moveBox = React.useCallback(
    (left, top) => {
      console.log("moveBox");
      console.log("top:" + top + ";left:" + left);
      setPosition({ ...position, left: left, top: top });
    },
    [position] // setBoxes(
    //   {...boxes,${id}:{...boxes.a,left:left,top:top}}
    //   // update(boxes, {
    //   //   [id]: {
    //   //     $merge: { left, top },
    //   //   },
    //   // }),
    // )],
  );
  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemTypes.MATERIAL,
    item: {
      type: ItemTypes.MATERIAL,
      id: id,
      left: position.left,
      top: position.top,
      title: title,
      moveBox: (left, top) => moveBox(left, top)
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  React.useEffect(() => {
    // //ドラッグ中のプレビューを設定
    // preview(getEmptyImage(), { captureDraggingState: true });
  }, []);
  return (
    <div ref={drag} style={getStyles(position.left, position.top, isDragging)}>
      <Material title={title} />
    </div>
  );
};
export default Container;
