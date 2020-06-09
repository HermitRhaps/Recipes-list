import React from "react";
import { render } from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware,  compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import { sagaWatcher } from "./redux/sagas/saga";
import createSagaMiddleware from "redux-saga";
const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(saga)
  )
);
saga.run(sagaWatcher);
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
