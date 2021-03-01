import React from 'react';
import './Cart.css';        

const Cart = (props) => {
    const cart = props.cart;
    
    const total = cart.reduce((total, player) => total + player.salary,0);
    
    return (
        <div className = 'text-center'>
            <h3 className = 'text-danger'>Summary</h3>
            <h5>Total Added Player : {cart.length}</h5>
            <br/>
            <h5 className = 'text-primary'>Players Name And Salary</h5>
            <ul className = 'list-group'>
                {cart.map((players) =>(
                    <li className = 'list-group-item list-group-item-primary'>
                        {players.name}   {players.salary}
                    </li>
                ))}
            </ul>
            <br/>
            <h5 className = 'p-3 mb-2 bg-primary text-white'>Total Budget : {total}</h5>
        </div>
    );
};

export default Cart;