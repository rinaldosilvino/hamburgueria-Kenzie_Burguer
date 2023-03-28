import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [listChange, setListChange] = useState(false);
  const [productsSearched, setProductsSearched] = useState(productsList);

  useEffect(() => {
    async function requestApi() {
      const response = await axios
        .get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
        .catch((err) => {
          console.log(`Erro: ${err}`);
        });
      setProductsList(response.data);
    }
    requestApi();
  });

  return (
    <div className="App">
      <Header
        setProductsSearched={setProductsSearched}
        setListChange={setListChange}
        productsList={productsList}
      ></Header>
      <div className="productsList_cartList">    
        {listChange ? (
          <ProductsList
            productsList={productsSearched}
            setCartList={setCartList}
            cartList={cartList}
          ></ProductsList>
        ) : (
          <ProductsList
            productsList={productsList}
            setCartList={setCartList}
            cartList={cartList}
          ></ProductsList>
        )}
        <Cart cartList={cartList} setCartList={setCartList}></Cart>
      </div>
    </div>
);
}

export default App;
