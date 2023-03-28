import Products from "../Product";
import "./styles.css";

export default function ProductsList({ productsList, setCartList, cartList }) {
return (
    <ul className="productsList">
    {productsList.map((product) => {
        return (
        <Products
            product={product}
            setCartList={setCartList}
            cartList={cartList}
            key={product.id}
        ></Products>
        );
    })}
    </ul>
);
}