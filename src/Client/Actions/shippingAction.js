export const ADD_SHIPPING = 'ADD_SHIPPING'
export const SUB_SHIPPING = 'SUB_SHIPPING'

export const addShipping= (id)=>{
    return{
        type: ADD_SHIPPING,
         id 
    }
}

export const subShipping= (id)=>{
    return{
        type: SUB_SHIPPING,
         id 
    }
}