import Accordian from "./components/accordian";
import SliderImagesDup from "./components/duplicate";
import RandomColor from "./components/random-color";
import ImageSlider from "./components/slider-images";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div>
      {/*  Accordian component */}
      {/* <Accordian /> */}
      {/* random color component */}
      {/* <RandomColor /> */}
      {/* StarRating */}
      {/* <StarRating noOfStar={10}/> */}
      {/* Image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} /> */}
   
      <SliderImagesDup url={"https://picsum.photos/v2/list"} limit={"10"}/>
    </div>
  );
}

export default App;
