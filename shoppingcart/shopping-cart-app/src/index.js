import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/cartReducer';
import AddProduct from './components/AddProduct';

//STEP 10 IMPORT REDUCER AND CREATE THE STORE THROUGH THE REDUCER
const store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
    <AddProduct />
    </Provider>, document.getElementById('root')

);


serviceWorker.unregister();
