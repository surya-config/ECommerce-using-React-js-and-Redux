import { addShipping,subShipping } from '../Actions/shippingAction'

const initState = {
    
}

export default function shippingReducer(state=initState,action){
    if(action.type=== ADD_SHIPPING){
        return{
        ...state,
        total: state.total + 6
              }
    }
    
    
    if(action.type=== SUB_SHIPPING){
        return{
            ...state,
            total: state.total - 6
        }
    }
}
