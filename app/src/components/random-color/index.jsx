import { useState } from 'react';

export default function RandomColor() {
    const [typeOfColor,setTypeOfColor] = useState('hex');
    const [color,setColor] = useState('#000000')

    function handleCreateRandomColor() {

    }
  return (
    <div style={{
        width: '100vw',
        height: '100vh',
        background: color,  
    }} className="container">
      <button onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>  
      <button onClick={()=> setTypeOfColor('rgb')}>Create RGB Color</button>  
      <button onClick={handleCreateRandomColor}>Geenrate Random color</button>
    </div>
  );
}
