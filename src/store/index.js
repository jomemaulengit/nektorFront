import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import tagReducer from "../redux/tagState";

export default function store() {
  return {
    ...createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))),
  };
};

const rootReducer = combineReducers({
  tags: tagReducer,
});

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
