import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import createSageMiddleware from "redux-saga";

import { fetchCollectionsStart } from "./shop/shop.sagas";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSageMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);
