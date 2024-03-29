import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export function configureStore() {
  const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware];
  const myStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleWares)));
  sagaMiddleware.run(rootSaga);
  return myStore;
}

export const store = configureStore();
