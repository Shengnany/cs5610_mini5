import { combineReducers } from "redux";

const boxReducer = (
  boxes = [
    { on: false, id: 1 },
    { on: false, id: 2 },
    { on: false, id: 3 },
    { on: false, id: 4 },
  ],
  action
) => {
  if (action.type == 'ON')
    return boxes.map((box) => {
      box.on = box.id === action.payload.id ? !box.on : box.on;
      return box;
    });
  else if (action.type == 'OFF') {
    return boxes.map((box) => {
      box.on = box.id === action.payload.id ? !box.on : box.on;
      return box;
    });
  }
  else return boxes;
};

const cntReducer = (cnt = 0, action) => {
  if (action.type === "ON") {
    return cnt - 1;
  } else if (action.type === "OFF")
    return cnt + 1;
  else return cnt;
};

export default combineReducers({
  boxes: boxReducer,
  cnt: cntReducer,
});
