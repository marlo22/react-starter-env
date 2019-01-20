import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Greeting from './components/Greeting';

import itemsReducer from './reducers/items';

const store = createStore(itemsReducer);
const App = (
  <Provider store={store}>
    <Greeting />
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
