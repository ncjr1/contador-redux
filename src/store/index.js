import { createStore, combineReducers} from "redux";
import contadorReducer from "../reducers/contador";

const reducers = combineReducers({ contadorReducer }); //Combina os reducers
const store = createStore(reducers);

export default store;