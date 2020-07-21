export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const ADD_QUANTITY = 'ADD_QUANTITY'
export const SUBTRACT_QUANTITY = 'SUBTRACT_QUANTITY'


export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
         id 
    }
}

export  const removeItem = (id) => {
    return{
        type : REMOVE_ITEM,
        id
    }
}

export  const addQuantity = (id) => {
    return{
        type : ADD_QUANTITY,
        id
    }
}

export  const subtractQuantity = (id) => {
    return{
        type : SUBTRACT_QUANTITY,
        id
    }
}


