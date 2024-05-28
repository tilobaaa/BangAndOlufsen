import classes from "./Collections.module.css";

const Collections = (props) => {
  return (
    <div className={classes.collections}>
      <div className={classes['image-div']}>
        <img src={props.image} alt="" />
      </div>

      <div className={classes["text-div"]}>
        <p>{props.paragraph}</p>
        <h5>{props.heading}</h5>
        <p className={classes['hide-para']}>{props.para2}</p>
      </div>
    </div>
  );
};

export default Collections;
