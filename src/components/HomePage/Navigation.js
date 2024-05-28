import { IoMdMenu } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import Logo from "../../Images/logo.png";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.overnav}>
      <div className={classes.nav}>
        <div className={classes["menu-div"]}>
          <IoMdMenu className={classes["menu-icon"]} />
          <h5>Menu</h5>
        </div>
        <img src={Logo} alt="" />
        <div>
          <FaCartPlus onClick={props.onOpen} className={classes.cart}/>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
