import { useState } from "react";
import Child from "./Child";


function Parent() {
  const [cnt, setCnt] = useState(0);
  const [boxes, setBoxes] = useState([
    { on: false, id: 1 },
    { on: false, id: 2 },
    { on: false, id: 3 },
    { on: false, id: 4 },
  ]);

  const handleTglStatus = (clkBox) => {
    setBoxes(
      boxes.map((box) => {
        box.on =
        clkBox.id === box.id ? !box.on : box.on;
        return box;
      })
    );
    setCnt(clkBox.on? cnt+1: cnt-1);
  };
  
  
  return (
    <div>
        <h1>Counter: {cnt}</h1>
      <div className="content">
      {boxes.map((box) => {
        return (
          <Child box={box} onTglStatus={handleTglStatus}>
          </Child>
        );
      })}
      </div>
    </div>
  );
}

export default Parent;
