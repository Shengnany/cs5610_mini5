import React from 'react'



function Child({ box, onTglStatus }) {
    let boxStyle = "box " +( box.on ? "on" : "off")  + " box" + box.id;
    return(
    <div className={boxStyle}  onClick={() => onTglStatus(box)}>
        </div>
    )
  };
export default Child;