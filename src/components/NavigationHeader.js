import { IoMdMenu } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import Logo from "../Images/logo.png";
import classes from "./NavigationHeader.module.css";
import { Link } from "react-router-dom";

const NavigationHeader = (props) => {
  return (
    <nav className={classes.overnav}>
      <div className={classes.nav}>
        <div className={classes["menu-div"]}>
          <Link to="products">
            <IoMdMenu className={classes["menu-icon"]} />
          </Link>
          <h5>Menu</h5>
        </div>
        <img src={Logo} alt="" className={classes["img-logo"]} />
        <div className={classes["menu-options"]}>
          <div className={classes["menu-paragraph"]}>
            <Link to="products">
              <p>Speakers</p>
            </Link>
          </div>

          <div className={classes["menu-paragraph"]}>
            <Link to="products">
              <p>Headphones</p>
            </Link>
          </div>
          <div className={classes["menu-paragraph"]}>
            <Link to="products">
              <p>Televisions</p>
            </Link>
          </div>
          <div className={classes["menu-paragraph"]}>
            <Link to="products">
              <p>Sound bars</p>
            </Link>
          </div>
          <div className={classes["menu-paragraph"]}>
            <Link to="products">
              <p>Support</p>
            </Link>
          </div>
        </div>
        <div>
          <FaCartPlus onClick={props.onOpen} className={classes.cart} />
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;
