import React from "react";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import ReactDom from "react-dom";
const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
  };

  const Modal = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDom.createPortal(
        <Modal
          title={props.title}
          message={props.title}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
