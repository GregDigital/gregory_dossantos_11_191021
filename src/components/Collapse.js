import React, { useState, useEffect, useRef } from "react";
import Img from "../assets/chevron.png";

const Collapse = (props) => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle && "active");
  };

  return (
    <div className="collapse">
      <button onClick={toggleState} className="collapse-visible">
        <span>{props.label}</span>
        <img className={toggle && "active"} src={Img} alt="chevron" />
      </button>

      <div
        className={toggle ? "collapse-toggle animated" : "collapse-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Collapse;
