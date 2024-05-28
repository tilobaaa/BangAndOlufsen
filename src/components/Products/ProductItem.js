import classes from "./ProductsItem.module.css";
import ProductsForm from "./ProductsForm";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const ProductItem = (props) => {

  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`

  const onAddCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.product}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductsForm onAddCart={onAddCartHandler} />
      </div>
    </li>
  );
};

export default ProductItem;
