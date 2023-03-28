import "./styles.css";

export default function Products({ product, setCartList, cartList }) {
function nullValue() {
    return false;
}

function handleAddCartProduct() {
    cartList.find((element) => element.id === product.id) !== undefined
    ? nullValue()
    : setCartList([...cartList, product]);
}

return (
    <li className="card" key={product.id}>
    <div className="cardDiv_img">
        <img
        src={product.img}
        alt=""
        className={
            product.name === "Milkshake Ovomaltine"
            ? "cardMilkshake_img"
            : product.category
        }
        ></img>
    </div>
    <div className="cardDescription">
        <h3 className="cardName">{product.name}</h3>
        <span className="cardCategory">{product.category}</span>
        <p className="cardPrice">
        R${product.price.toFixed(2).replace(".", ",")}
        </p>
        <button
        className="cardButtons"
        onClick={() => {
            handleAddCartProduct();
        }}
        >
        Adicionar
        </button>
    </div>
    </li>
);
}