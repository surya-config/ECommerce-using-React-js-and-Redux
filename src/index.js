import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Client/style.css"
import AppRouter from './Client/AppRouter.jsx';

import { createStore} from 'redux'
import { Provider } from 'react-redux'


import {cartReducer} from './Client/Reducers/cartReducer'

const store = createStore(cartReducer)



ReactDOM.render(
  <Provider store={store}> 
    <AppRouter />
  </Provider>
 ,document.getElementById('root')
);


