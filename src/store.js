import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { orderReducer } from "./reducers/orderReducers";
import { productsReducer } from "./reducers/productReducers";
import { blogReducer } from "./reducers/blogReducers";
import { contactReducer } from "./reducers/contactReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    blogs: blogReducer,
    contact: contactReducer
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
