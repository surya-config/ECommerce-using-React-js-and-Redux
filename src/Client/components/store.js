import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import cartReducer from "./Reducers/cartReducer";


const store = createStore(
    cartReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;