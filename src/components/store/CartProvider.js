import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultItem = {
  items: [],
  totalAmount: 0,
};

const reducerMethod = (state, action) => {
    if (action.type === "ADD") {
      const updatedTotalAmount =
        state.totalAmount + (action.item.price * action.item.amount);
      const doesItemExistIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const cartItemAdded = state.items[doesItemExistIndex];
      let updatedItems;

      if (cartItemAdded) {
        const updatedItem = {
          ...cartItemAdded,
          amount: cartItemAdded.amount + action.item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[doesItemExistIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    }

    if (action.type === "REMOVE") {
        const itemIndex = state.items.findIndex(item => item.id === action.id)
        

        const cartItemRemoved = state.items[itemIndex]
        const updatedTotalAmount = state.totalAmount - cartItemRemoved.price;
        let updatedItems;

        if (cartItemRemoved.amount=== 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else{
          const updatedItem = {...cartItemRemoved, amount: cartItemRemoved.amount - 1}
          updatedItems = [...state.items];
          updatedItems[itemIndex] = updatedItem;
        }

        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        }
    }

    return defaultItem
  };

const CartProvider = (props) => {
  

  const [reducedState, dispatchFunction] = useReducer(
    reducerMethod,
    defaultItem
  );

  const addItemToCart = (item)=>{
    dispatchFunction({type: "ADD", item: item})
  }

  const removeItemFromCart = (id)=>{
    dispatchFunction({type: "REMOVE", id:id})
  }

  const cartContextData = {
    items: reducedState.items,
    totalAmount: reducedState.totalAmount,
    addItem : addItemToCart,
    removeItem: removeItemFromCart
  }

  return (
    <CartContext.Provider value={cartContextData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
