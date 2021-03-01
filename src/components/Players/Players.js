import React, { useEffect, useState } from 'react';
import './Players.css';
import fakeData from '../../fakeData/playerData';
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        setPlayers(fakeData);
    },[])

    const handleAddClick = (player) =>{
        const newCart = [...cart, player];
        setCart(newCart);
    }

    return (
        <div className = 'row mt-5 players'>
            <div className = 'col-8'>
                <div className = 'row'>
                    {
                        players.map(player => <Player handleAddClick = {handleAddClick} player = {player} key ={player.id}></Player>)
                    }
                </div>
            </div>
            <div className ='col-4 cart-container'>
                    <Cart cart = {cart} ></Cart>
            </div>        
        </div>
    );
};

export default Players;