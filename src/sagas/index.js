import { takeEvery, all, call, put } from "redux-saga/effects";
import lodash from "lodash";
import * as callMethods from "./callMethods";
import ApiService from "../API/index";
import _ from "lodash";

export function* mySagaGeneric(action) {
  const method = _.camelCase(action.type);
  const dataPayload = callMethods[method](action.payload);
  try {
    const response = yield call(ApiService, {
      dataPayload,
    });
    const newType = action.type.replace("_REQUEST", "_SUCCESS");
    yield put({ type: newType, response, payload: action.payload });
  } catch (e) {
    const errorModel = {
      type: action.type.replace("_REQUEST", "_FAILED"),
      payload: action.payload,
      message: e.statusText,
      status: e.status,
      response: e.response,
    };
    console.error(errorModel);
    yield put(errorModel);
  }
}

export function* mySagaAll(action) {
  yield takeEvery(({ type }) => /_REQUEST$/g.test(type), mySagaGeneric);
}

export function* rootSaga() {
  yield all([mySagaAll()]);
}
