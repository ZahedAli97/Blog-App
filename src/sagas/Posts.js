import { put } from "redux-saga/effects";
import { get_posts_success, get_posts_failure } from "../actionCreator/Posts";

export function* getPostsSaga() {
  try {
    const postsResponse = yield fetch("http://localhost:3000/posts");

    const posts = yield postsResponse.json();
    yield put(get_posts_success(posts));
  } catch (err) {
    yield put(get_posts_failure(err));
  }
}
