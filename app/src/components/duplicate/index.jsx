import './styles.css';
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function SliderImagesDup() {
    const [images,setImages] = useState([]);
    const [currentSlide,setCurrentSlide] = useState(0);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

   async function fetchImages(getImages) {
     try {
       setLoading(true);
       const response = await fetch(`${url}?page=1&limit=${limit}`);
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
    
   })
    return <div container>
      
    </div>
}

