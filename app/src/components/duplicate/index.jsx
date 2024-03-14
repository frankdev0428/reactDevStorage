import './styles.css';
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function SliderImagesDup({ url , limit }) {
    const [images,setImages] = useState([]);
    const [currentSlide,setCurrentSlide] = useState(0);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

   async function fetchImages() {
     try {
       setLoading(true);
       const response = await fetch(`${url}?page=1&limit=${limit}`);
       const data = await response.json();
       if (data) {
        setLoading(false);
        setImages(data);
       } 
       } catch (e){
        setError(e.message);
        setLoading(false);  
       } 
     } 
   useEffect(() => {
    if(url !== "") fetchImages();
     console.log(images);
   },[url])
   if(loading){
    return <div>Page are loading please wait</div>
   }
   if(error !== null){
    return <div>Found an error {error}</div>
   }

   function handleNext() {
     setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1 )
   }
   function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
   }
    return <div className='container'>
       <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left'/> 
      {images && images.length ?
        images.map((imageItem,index) => (
          <img 
            key={imageItem.id}
            src={imageItem.download_url}
            alt={imageItem.download_url}
            className={
              currentSlide === index ? 
              "current-image" : 
              "current-image  hide-current-image"
            }
          />
        )) : null
      }
      <BsArrowRightCircleFill  onClick={handleNext} className=' arrow arrow-right'/> 
      <span className='circle-indicators'>
      {
        images && images.length ?
        images.map((_,index) => (
            <button 
            key={index}
            className={
                currentSlide === index ?
                "current-indicator" :
                "current-indicator inactive-indicator"
            }
            onClick={() => setCurrentSlide(index)}
            ></button>
        )): null
      }
      </span>
     
    </div>
}

