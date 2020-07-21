import React from "react"
import {Link } from "react-router-dom"


import { connect } from 'react-redux'
import { addToCart } from '../Actions/cartAction'


function Product(props){

  const handleClick = (id)=>{
    props.addToCart(id); 
  }

  
  return ( 
       <div className="container">
           
           {props.items.map(item => 
             <div className="product ">
             <img  className="productimage"   src={item.src} alt={item.id} />
             <p className="productCaption" align="center" > <Link to={"/product/"+ item.id}  >{item.brand}  {item.category}</Link> </p>
             <p className="productCaption" align="center">Price  ${item.price}</p>
             <button 
                style={{
                  fontSize:"17px", 
                  borderWidth:"1px",
                  borderColor:"black",
                  paddingLeft: "25px",
                  paddingRight: "25px",
              
                }} 
                onClick={()=>{handleClick(item.id)
                }}>
              Add to Cart
             </button>
         </div>

           )}
       </div>
     )
}

const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)