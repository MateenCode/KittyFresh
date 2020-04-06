import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import createSageMiddleware from "redux-saga";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSageMiddleware();

const middlewares = [sagaMiddleware];

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// sagaMiddleware.run()

export const persistor = persistStore(store);
