import {useState, useEffect} from 'react'
import './styles.css';



const Duplicate = () => {

    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(0);
    const [disableButton,setDisableButton] = useState(false);


    async function fetchProducts() {
         try {
           setLoading(true);
           const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
           }`)
           const result = await response.json();
           if (result && result.products && result.products.length) {
            
            setProducts((prevData) => [...prevData, ...result.products]);
            setLoading(false);
           }

          console.log(result)
         } catch(e) {
             console.log(e);
             setLoading(false);
         }
    }
    useEffect(() => {
       fetchProducts();
    },[count]);
    useEffect(() => {
        if (products && products.length === 100){
          setDisableButton(true);
        }  
    },[products])

    if(loading) {
        return <div>The Page Currently Loading Data 🔥🔥🔥🔥</div>
    }
  return (
    <div className='load-more-container'> 
     <div className='product-container'>
       {products && products.length ? 
       products.map((data,index) => (
        <div className='product' key={index}>
            <img src={data.thumbnail} alt={data.description}/>
            <p>{data.title}</p>
        </div>
       ))
       : null   
    }
     </div>
     <div className="button-container">
        <button disabled={disableButton} onClick={()=> setCount(count + 1)}>Load more</button>
     </div>
    </div>
  )
}

export default Duplicate;