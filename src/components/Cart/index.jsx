import "./styles.css";

export default function Cart({ cartList, setCartList }) {
function TotalValue() {
    const resultTotal = cartList.reduce(
    (previusValue, currentValue) => previusValue + Number(currentValue.price),
    0
    );
    return <p>R${resultTotal.toFixed(2).replace(".", ",")}</p>;
}

function handleCartFiltered(product) {
    const arrayFiltered = cartList.filter((element) => element !== product);
    setCartList(arrayFiltered);
}

return (
    <div className={cartList.length > 0 ? "cartFull" : "cartEmpty"}>
        <div className="cartHeader">
            <h3>Carrinho de compras</h3>
        </div>
        <ul className="cartList">
            {cartList.length > 0 ? (
            cartList.map((product) => {
            return (
            <li className="cartList_child" key={product.id}>
                <div className="cartDiv_img">
                    <img src={product.img} alt="" className="cartImg"></img>
                </div>
                <div className="cartDiv_details">
                    <h3 className="cartProduct_name">{product.name}</h3>
                    <span className="cartProduct_category">
                        {product.category}
                    </span>
                </div>
                <p
                className="cartItem_remove"
                onClick={() => {
                    handleCartFiltered(product);
                }}
                >
                Remover
                </p>
            </li>
            );
            })
            ) : (
            <div className="cartEmpty_box">
                <h3 className="cartEmptyBox_header">Sua sacola está vazia</h3>
                <p className="cartEmptyBox_p">Adicione itens</p>
            </div>
            )}
        </ul>
    <div className={cartList.length > 0 ? "cartDiv_full" : "cartDiv_empty"}>
        <div className="cart_div_totalValue">
            <p>Total</p>
            <TotalValue></TotalValue>
        </div>
        <button
        className="cartButton_removeAll"
        onClick={() => setCartList([])}
        >
        Remover todos
        </button>
        </div>
    </div>
);
}