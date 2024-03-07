import { useState } from "react";
import { FaStar } from 'react-icons/fa';
export default function StarRating({noOfStar}) {
    const [rate,setRate] = useState(0);
    const [hover,setHover] = useState(0);

function handleClick(index) {
    setRate(index)
}
function handleMouseEnter(index) {
    setHover(index);
}
function handleMouseLeave() {
    setHover(rate);
}

    return <div>
        {[...Array(noOfStar)].map((_,index) => {
           return <FaStar 
         key={index}
         onClick={() => handleClick(index)}
         onMouseEnter={()=> handleMouseEnter(index)}
         onMouseLeave={() => handleMouseLeave}
         color={(hover || rate) >= index ? 'yellow' : 'gray'}
         style={{ marginRight: '5px',cursor : 'pointer'}}
         size={40}
           />
        })} 
    </div>
}