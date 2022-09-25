import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import shoppingCartReducer from "../reducer/shoppingCartReducer";

const reduxStore = createStore(shoppingCartReducer, composeWithDevTools(applyMiddleware(logger)));

export default reduxStore;
