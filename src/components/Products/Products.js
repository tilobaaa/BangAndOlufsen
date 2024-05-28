import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import cartImg from "../../Images/cartImg.jpg";
import { Link } from "react-router-dom";

const products = [
  {
    id: "e1",
    title: "Bluetooth Speakers",
    price: 100,
    image:
      "https://www.amazon.com/dp/B00X4SQQ3C?tag=googshopuk-21&tag=googshopuk-21&ascsubtag=",
  },
  {
    id: "e2",
    title: "Home Theaters",
    price: 300,
    image:
      "https://www.amazon.com/dp/B00X4SQQ3C?tag=googshopuk-21&tag=googshopuk-21&ascsubtag=",
  },
  {
    id: "e3",
    title: "Telivision Sets",
    price: 400,
    image:
      "https://www.amazon.com/dp/B00X4SQQ3C?tag=googshopuk-21&tag=googshopuk-21&ascsubtag=",
  },
  {
    id: "e4",
    title: "Headphones",
    price: 100,
    image:
      "https://www.amazon.com/dp/B00X4SQQ3C?tag=googshopuk-21&tag=googshopuk-21&ascsubtag=",
  },
];

const Products = () => {
  return (
    <>
      <div>
        <img className={classes.image} src={cartImg} alt="" />
      </div>
      <ul className={classes.products}>
        <h2>Shop in our store</h2>
        {products.map((item) => (
          <ProductItem
            title={item.title}
            description={item.description}
            price={item.price}
            key={item.id}
            id={item.id}
          />
        ))}
      </ul>
      <div className={classes.footer}>
        <div>
          <p>Back home?</p>
          <Link to={".."} className={classes.link}>
            <button>Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Products;
