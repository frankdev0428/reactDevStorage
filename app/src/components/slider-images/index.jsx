import { useState, useEffect } from "react";

export default function ImageSlider({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg,setErrorMsg] = useState(null);
  const [loading,setLoading] = useState(false);

  async function fetchImages() {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      const data = await response.json();
  
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {

    if (url !== "") fetchImages()
  }, [url]);
     console.log(images);
   if(loading) {
       return <div>Loading data! Please wait</div>
   }
   if(errorMsg !== null) {
     return <div>Error occured! {errorMsg}</div>
   }
  return <div className="container"></div>;
}
