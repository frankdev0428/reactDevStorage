import React, { useEffect, useState } from "react";
import './style.css'
const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable,setDisable] = useState(false)
  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result.products && result.products.length) {
        setLoading(false);
        setProducts((prevData) => [...prevData, ...result.products]);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
    console.log(products)
  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    if(products.length === 100){
      setDisable(true);
    }
  },[products])
  if (loading) {
    return <h2>The page is currently loading 🔥🔥🔥</h2>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
          {products && products.length ? 
        products.map((productData,index) => (
          <div className="product" key={index}>
          <img src={productData.thumbnail} alt={productData.description} />
          <h3>{productData.title}</h3>
          <p>{productData.brand}</p>
          <p>Rating : {productData.rating} ⭐️</p>
          <p>Stock : {productData.stock}</p>
          <p>{productData.price} $</p>
          </div>
        ))
        :null  
        }
      </div>
      <div className="button-container">
        <button disabled={disable} onClick={() => setCount(count + 1)}>Load more product</button>
        {disable && <h3>You hit 100 product</h3>}
      </div>
    </div>
  );
};

export default LoadMoreData;
