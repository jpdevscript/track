import { fork, all } from "redux-saga/effects";
import helloSaga from "../components/Hello/sagas";

function* rootSaga() {
    yield all ([
        fork(helloSaga)
    ]);
}

export default rootSaga;