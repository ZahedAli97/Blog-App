import { takeLatest, all } from "redux-saga/effects";
import { GET_POSTS } from "../actionTypes/Posts";
import { getPostsSaga } from "./Posts";

export function* postsSagaWatcher() {
  yield takeLatest(GET_POSTS, getPostsSaga);
}
