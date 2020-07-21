
import cartReducer from './cartReducer'
import shippingReducer from './shippingReducer'
import headerReducer from './headerReducer'

export  const rootReducer = combineReducer(
    {
    cart:cartReducer,
    shipping:shippingReducer,
    header:headerReducer,
    }
);

