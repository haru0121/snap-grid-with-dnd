import React, { useEffect, useState, memo } from "react";
import Material from "../parts/Material";
const styles = {
  display: "inline-block",
  transform: "rotate(-7deg)",
  WebkitTransform: "rotate(-7deg)"
};
const Container = memo(({ title }) => {
  const [tickTock, setTickTock] = useState(false);
  useEffect(
    function subscribeToIntervalTick() {
      const interval = setInterval(() => setTickTock(!tickTock), 500);
      return () => clearInterval(interval);
    },
    [tickTock]
  );
  return (
    <div style={styles}>
      <Material title={title} yellow={tickTock} />
    </div>
  );
});
export default Container;
