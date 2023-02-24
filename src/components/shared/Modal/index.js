import React from "react";
import ModalC from "react-modal";
import useInnerSize from "../../../hooks/useInnerSize";

const customStyles = (width) => ({
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: width > 500 ? "450px" : "80%",
    padding: 0,
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ModalC.setAppElement("body");

function Modal(props) {
  const { width } = useInnerSize();
  return (
    <>
      <ModalC style={customStyles(width)} {...props}>
        {props.children}
      </ModalC>
    </>
  );
}

export default Modal;
