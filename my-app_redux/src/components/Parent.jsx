
import Child from "./Child";
import { connect } from 'react-redux';
import { selectBox } from '../actions';

const Parent = (props) => {

 
  const handleTglStatus = (clkBox) => {
    props.selectBox(clkBox);
  };
  
  
  return (
    <div>
        <h1>Counter: {props.cnt}</h1>
      <div className="content">
      {props.boxes.map((box) => {
        return (
          <Child box={box} onTglStatus={handleTglStatus} >
          </Child>
        );
      })}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return { boxes: state.boxes, cnt: state.cnt };
};

export default connect(
  mapStateToProps, { selectBox }
)(Parent);