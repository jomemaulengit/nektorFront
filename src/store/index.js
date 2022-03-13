import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import tagReducer from "../redux/tagState";

export function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}
export function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
const persistedState = loadFromLocalStorage();

const rootReducer = combineReducers({
  tags: tagReducer,
});

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
