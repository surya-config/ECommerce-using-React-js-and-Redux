import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { removeItem,addQuantity,subtractQuantity} from '../Actions/cartAction'
import Shipping from './Shipping'
import { addShipping,subShipping } from '../Actions/shippingAction';


class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    
    render(){

        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        
                        <li className="collection-item avatar" key={item.id} style={{listStyle:"none"}}>
                            <Table width="100%">
                                <tr>
                                  <td>
                                         <div className="item-img"> 
                                             <img src={item.src} alt={item.src} width="150px" height="200px"/>
                                         </div>   
                                  </td>

                                  <td style={{marginLeft:"100px",paddingLeft:"100px"}}>
                                        <div className="item-desc" style={{color:"white"}}>
                                             <span className="title">{item.brand} {item.category}</span>
                                             <p>{item.desc}</p>
                                             <p><b>Price: {item.price}$</b></p> 
                                             <p>
                                                <b>Quantity: 
                                                <div className="add-remove">
                                                    <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                                         {item.quantity}
                                                    <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                                </div></b> 
                                              </p>
                                                <button className="waves-effect waves-light btn pink remove" style={{color:"white"}} onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                        </div> 
                                    </td>
                                </tr>
                                </Table>  
                        </li>    
                                  
                    )
                })
            ):

             (
                <p style={{color:"white"}}>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart" style={{color:"white",marginTop:"40px",marginLeft:"40px"}}>
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                    <Shipping />
                </div>      
            </div>
       )
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))},
        addShipping: (id)=>{dispatch(addShipping(id))},
        subShipping: (id)=>{dispatch(subShipping(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)