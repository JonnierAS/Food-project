import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./redux/store/store.js"

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
)

