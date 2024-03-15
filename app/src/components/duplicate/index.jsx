import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function SliderImagesDup( { url , limit }){
    const [images,setImages] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const [currentSlice,setCurrentSlice] = useState(0);

    async function fetchImages() {
        try{
          setLoading(true);
          const response = await fetch(`${url}?page=1&limit=${limit}`);
          const data = await response.json();
          if(data) {
            setLoading(false);
            setImages(data);
          }
        } catch (e){
           setLoading(false);
           setError(e.message);
        }
    }
    useEffect(() => {
        if(url !== '') fetchImages();
    },[url]);
   if(loading){
      return <h2>The page is loading! Please Wait for a bit 😎</h2>
   }
   if(error !== null){
    return <h2>We found {error}</h2>
   }
   function handleNext() {
      setCurrentSlice(currentSlice === images.length - 1 ? 0: currentSlice + 1);
   }

   function handlePrevious() {
     setCurrentSlice(currentSlice === 0 ? images.length -1: currentSlice - 1);
   }
    return <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious}/>
       {
        images && images.length ?
        images.map((getImages,index) => (
            <img 
               className={
                currentSlice === index ?
                "current-image" :
                "current-image hide-current-image"
               }
               key={getImages.id}
               src={getImages.download_url}
               alt={getImages.download_url}
            />
        )): null
       }
       <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}/>
       <span className="circle-indicators">
        {
            images && images.length ?
            images.map((_,index) => (
                <button
                key={index}
                className={
                    currentSlice === index ?
                    "current-indicator" :
                    "current-indicator inactive-indicator"
                }
                ></button>
            )): null
        }
       </span>
    </div>
}