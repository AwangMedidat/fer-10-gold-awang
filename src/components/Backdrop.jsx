import React, { useEffect, useState } from "react";
import "./Backdrop.css";

function Backdrop(props) {
  const { triggerClass } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (evt) => {
      if (evt.target.className.includes(triggerClass)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [triggerClass]);

  return show ? <div className="backdrop"></div> : <></>;
}

export default Backdrop;
