import "./App.css";
import CartItem from "./components/Cart/Cart";
import Homepage from "./components/HomePage/Homepage";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Products from "./components/Products/Products";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const handleClick = () => {
    setOpenCart(false);
  };

  const openClick = () => {
    setOpenCart(true);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout onOpen={openClick} />,
      children: [
        {
          index: true,
          element: <Homepage onOpen={openClick} />,
        },
        { path: "products", element: <Products /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <CartProvider>
        {openCart && <CartItem onClose={handleClick} />}
        <RouterProvider router={router} />
      </CartProvider>
    </div>
  );
}

export default App;
