import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes.cardImg} src={props.image} alt="" />
      <div className={classes.textDiv}>
        <p>{props.firstP}</p>
        <h2>{props.heading}</h2>
        <p>{props.secondP}</p>
        {props.btnText && <button>{props.btnText}</button>}
      </div>
    </div>
  );
};

export default Card;
