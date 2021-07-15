import React from 'react';
import './MonsterCard.css'
import MonsterBox from '../MonsterBox/MonsterBox';

const MonsterCard = props => {
    return (
        <div className='card-list'>
        {props.monsters.map(monster => (<MonsterBox key={monster.id} monster={monster}/>))}
        </div>
    )
}
export default MonsterCard;