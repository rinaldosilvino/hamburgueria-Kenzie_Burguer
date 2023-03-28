import { useState } from "react";
import "./styles.css";

export default function Header({
setProductsSearched,
setListChange,
productsList,
}) {
const [wordSearched, setWordSearched] = useState("");
function handleFilterProductsEvent(event) {
    const productsFiltered = productsList.map((products) => {
    if (
        products.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase()) ||
        products.category
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    ) {
        return products;
    }
    });

    setProductsSearched(
    productsFiltered.filter((element) => element !== undefined)
    );
}

function handleFilterProductsInput() {
    const input = document.getElementById("inputSearch");
    const productsFiltered = productsList.map((product) => {
    if (
        product.name.toLowerCase().includes(input.value.toLowerCase()) ||
        product.category.toLowerCase().includes(input.value.toLowerCase())
    ) {
        return product;
    }
    });
    setProductsSearched(
    productsFiltered.filter((element) => element !== undefined)
    );
}

return (
    <>
    <header className="header">
        <div className="divLogo">
            <h1 className="logo_1">Burguer</h1>
            <h3 className="logo_2">Kenzie</h3>
        </div>
        <div className="divInput_pesquisa">
            <input
                type="text"
                placeholder="Digitar Pesquisa"
                className="inputPesquisa"
                maxLength={20}
                id="inputSearch"
                onChange={(event) => {
                event.target.value === ""
                    ? setListChange(false)
                    : setListChange(true);
                setWordSearched(event.target.value);
                handleFilterProductsEvent(event);
                }}
            ></input>
            <button
                className="inputButton"
                onClick={() => {
                setListChange(true);
                handleFilterProductsInput();
                }}
            >
                Pesquisar
            </button>
        </div>
    </header>
    </>
);
}