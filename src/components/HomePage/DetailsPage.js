import classes from "./DetailsPage.module.css";

const DetailsPage = (props) => {
  let additionalStyle;
  if (props.bgColor) {
    additionalStyle = { backgroundColor: props.bgColor };
  }

  if (props.bgImg) {
    additionalStyle = { backgroundImage: `url(${props.bgImg})` } ;
  }
  return (
    <div className={classes.description} style={additionalStyle }>
      <div className={classes['description-div']} style={props.extraBg ? {backgroundColor: props.extraBg} : null }>
      <h3>{props.firstG}</h3>
      <h3>{props.secondG}</h3>
      <h3>{props.thirdG}</h3>
      <p>{props.textDetails}</p>
      {props.buttonText && <button>{props.buttonText}</button>}
      </div>
      
    </div>
  );
};

export default DetailsPage;
