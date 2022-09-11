import { combineReducers } from "redux";
import { productReducers } from "./productReducers";
import { selectedProductReducer } from "./productReducers";

const reducers = combineReducers({
    allProducts: productReducers,
    product: selectedProductReducer
})

export default reducers;