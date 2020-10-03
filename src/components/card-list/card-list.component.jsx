import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
    return (
    <div className="card-list">
        {
          props.monsters.length === 0 ? <h1>No monsters!</h1> :
          props.monsters.map(monster => <Card key={monster.id} monster={monster} />)
        }
    </div>
    )
}