import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as actions from './actions';
import reducer from './reducer';
import Level from './Level';
import Logger from './Logger';
import { initialState } from './initialState';

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//feel free to change this for testing purposes,
//but revert the changes back to these defaults when you
//submit.
store.dispatch(actions.setMapSize(20, 10));
store.dispatch(actions.addEnemy(157));
store.dispatch(actions.addEnemy(154));

window.addEventListener('keydown', (e) => {
  const arrowKeys = [37, 39, 38, 40];
  if (arrowKeys.indexOf(e.keyCode) !== -1) {
    store.dispatch(actions.step(e.keyCode));
  }
}, false);

//helper callback for identifying index of tiles.
window.addEventListener('click', (e) => {
  const index = Number(e.target.getAttribute("index"));
  if (index === 0 || index === undefined) return;
  console.log(`clicked index: ${index}`);
}, false);

global.store = store;

function App() {
  return (
    <Provider store={store} className="App">
      <Level width="40" height="20" />
      <Logger/>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
