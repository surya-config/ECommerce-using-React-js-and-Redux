import React from 'react';
import { BrowserRouter,Route,Switch,Link} from "react-router-dom";

import Product from './components/Product'
import Header from './components/Header';
import Shirts from './components/Shirts';
import Pants from './components/Pants';
import Shoes from './components/Shoes';
import Cart from "./components/Cart";


const notfoundpage=()=>(
    <div>
      <h1 className="notfound">404-Page Not Found</h1>
      <Link to="/">Back to Home Page</Link>
    </div>
    
  );

const AppRouter=()=>(
    <BrowserRouter>
    <Header />
    <Switch>
       <Route path="/" component={Product} exact={true}/>
       <Route path="/Cart" component={Cart} />
       <Route path="/Categories/Shirts" component={Shirts}/>
       <Route path="/Categories/Pants" component={Pants}/>
       <Route path="/Categories/Shoes" component={Shoes}/>
       <Route component={notfoundpage}/>
    </Switch>
</BrowserRouter>
)

export default AppRouter;