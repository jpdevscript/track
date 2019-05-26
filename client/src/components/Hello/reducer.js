import { types } from './constants';
import createReducer from "../../utils/createReducer";

const Immutable = require("seamless-immutable").static;

const initialState = Immutable.from({
    response: '',
    post: '',
});

const loadHelloData = (state, { helloData }) => {
  return Immutable.merge (state, {response: helloData});
}

const loadTextChange = (state, { value }) => {
  return Immutable.merge (state, {post: value});;
}


const handlers = {
  [types.LOAD_HELLO_DATA]: loadHelloData,
  [types.HANDLE_TEXT_CHANGE]: loadTextChange
}

export default createReducer(initialState, handlers);