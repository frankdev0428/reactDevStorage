//single selection
//mutiple selection
import data from "./data";
import { useState } from "react";
import "./styles.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else cpyMultiple.splice(findIndexCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button
        className=""
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        Enable Muti Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection ? 
                multiple.indexOf(dataItem.id) !== -1 &&
                <div className="content">{dataItem.answer}</div> :
                selected === dataItem.id && 
                <div className="content">{dataItem.answer}</div>
              }
              
              {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
