import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const addToCart =(id)=>{
        addToDb(id);
    }
    const removeFromCart = (id)=>{
        removeFromDb(id);
    }
    const deleteCart = ()=>{
        deleteShoppingCart()
    }
    
    // const addToCartWithParam = ()=> addToCart(price);
    return (
        <div className='product'>
            <h3>Buy this : {name}</h3>
            <p>Only for :$ {price}</p>
            <p><strong>It has id:</strong> {id}</p>
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
            <button onClick={()=>removeFromCart(id)}> Remove </button>
            <button onClick={()=>{deleteCart()}}>Delete</button>
           
            {/* <button onClick={addToCartWithParam}>Add to Cart</button> */}
        </div>
    );
};

export default Cosmetic;