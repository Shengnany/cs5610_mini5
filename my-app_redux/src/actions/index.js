// Action creator
export const selectBox= box => {
    // Return an action
  if(box.on)
    return {
      type: 'ON',
      payload: box
    };
  else {
    return {
      type: 'OFF',
      payload: box
    };
  };
};
  