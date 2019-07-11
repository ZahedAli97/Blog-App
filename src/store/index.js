import { createStore, applyMiddleware } from "redux";
import postsReducer from "../reducers/Posts";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { postsSagaWatcher } from "../sagas";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  postsReducer,
  applyMiddleware(sagaMiddleWare, logger)
);

sagaMiddleWare.run(postsSagaWatcher);

export default store;
