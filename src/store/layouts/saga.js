import { takeEvery, put, fork, all } from "redux-saga/effects";
import { GET_LAYOUT, UPDATE_INTERNAL_LAYOUT } from "./actionTypes";
import {
    apiResponseSuccess,
    apiResponseError,
    updateLayoutApiSuccess,
    updateLayoutApiFailure,
} from "./actions";

function* onGetLayouts() {
    try {
        let api_response = {};
        yield put(apiResponseSuccess(GET_LAYOUT, api_response));
    } catch (error) {
        const error_msg = error?.message || "Get Admin Layouts Failed";
        yield put(apiResponseError(GET_LAYOUT, error_msg));
    }
}

function* onUpdateLayouts(action) {
    try {
        let newLayouts = action.payload;
        yield put(updateLayoutApiSuccess(newLayouts));
    } catch (error) {
        let error_msg =
            error?.message || action.payload || "Update Layout Failed";
        yield put(updateLayoutApiFailure(error_msg));
    }
}

// Watcher
function* watchGetLayouts() {
    yield takeEvery(GET_LAYOUT, onGetLayouts);
}

function* watchUpdateLayout() {
    yield takeEvery(UPDATE_INTERNAL_LAYOUT, onUpdateLayouts);
}

function* saga() {
    yield all([fork(watchGetLayouts), fork(watchUpdateLayout)]);
}

export default saga;
