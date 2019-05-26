import { call, put, takeLatest } from "redux-saga/effects";
import { types } from "./constants";
import { fetchHelloData } from "./services";

export function* getHelloResponse({ post }) {
  const helloData = yield call(fetchHelloData, post);
  if(helloData && helloData.length > 0) {
    yield put({type: types.LOAD_HELLO_DATA, helloData})
  }
}

function* helloSaga() {
  yield takeLatest(types.GET_HELLO_RESPONSE, getHelloResponse);
}

export default helloSaga;