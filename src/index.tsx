import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import Loader from './components/Loader/Loader';
import store from './reduxs/store';

ReactDOM.render(
  <React.Fragment>
    <div className="binhhp-main--wrapper" id="main">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
    <Loader />
  </React.Fragment>,
  document.getElementById('binhhp')
);

(module as any).hot.accept();
