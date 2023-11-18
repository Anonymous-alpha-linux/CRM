import { all, fork } from "redux-saga/effects";

import SettingSaga from "./layouts/saga";

function* rootSaga() {
    yield all([fork(SettingSaga)]);
}

export default rootSaga;
