import React from 'react';
import { addFeature, removeFeature } from "./actions"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {useSelector, useDispatch} from "react-redux";

// import { connect } from "react-redux"

const App = () => {
  const Dispatch = useDispatch();
  const car = useSelector(state => state.car);
  const additionalPrice = useSelector(state=>state.additionalPrice);
  const additionalFeatures = useSelector(state => state.additionalFeatures);

  const removeFeature = item => {
    Dispatch({type:"REMOVE_FEATURE",payload:item})
  };

  const buyItem = item => {
    Dispatch({type:"ADD_FEATURE",payload:item})
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} buyItem={buyItem}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

// function mapStateToProps(state) {
//   return{
//     additionalPrice: state.additionalPrice,
//     car: state.car,
//     additionalFeatures: state.additionalFeatures
//   };
// };

export default App;
