import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}>{props.children}</div>;
};



const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("portals");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;


