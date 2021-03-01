import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';



const Player = (props) => {
    const {name, img, role, salary} = props.player;

    return (
        <div className = 'col-sm-6 mb-4'>
            <div className = 'card'>
                <img className = 'card-img-top' src ={img} alt=""/>
                    <div className = 'card-body'>
                        <h4 className = 'card-title'>{name}</h4>
                        <p className = 'card-text'>{role}</p>
                        <h5>Salary: {salary}</h5>
                        <button className="btn btn-danger" onClick={()=>props.handleAddClick(props.player)}><FontAwesomeIcon icon={faUserAlt} /> Add Player</button>
                    </div>
            </div>
         </div>
    );
};

export default Player;