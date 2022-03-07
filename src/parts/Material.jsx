import React from "react";
const Container = (props) => {
  const { title } = props;
  return (
    <img
      src="https://dummyimage.com/100/74d0f2/fafafa.png&text=drag+me"
      alt={title}
    />
  );
};
export default Container;
