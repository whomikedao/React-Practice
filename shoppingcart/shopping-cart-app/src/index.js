import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/cartReducer';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';

//STEP 10 IMPORT REDUCER AND CREATE THE STORE THROUGH THE REDUCER
const store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route exact path="/" component={AddProduct} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </BaseLayout>    
        </BrowserRouter>
        
    </Provider>, document.getElementById('root')

);


serviceWorker.unregister();
