import Accordian from "./components/accordian";
import SliderImagesDup from "./components/duplicate";
import LoadMoreData from "./components/load-more-images";
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
      {/* Load more product component */}
      <LoadMoreData />
    </div>
  );
}

export default App;
