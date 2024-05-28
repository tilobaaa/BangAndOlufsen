import Modal from "../Portals/Backdrop";
import { useContext } from "react";
import cartContext from "../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);

  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          title={item.title}
          id={item.id}
          key={item.id}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      <div>
        {cartItems}
        {cartCtx.items.length === 0 && <p>No Items in your cart</p>}
        <div className={classes.total}>
          <span>Total amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onClose} className={classes["button--alt"]}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
