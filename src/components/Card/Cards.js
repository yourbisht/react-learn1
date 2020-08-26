import React from 'react';
import { CardList } from '../Card-List/CardList'

export const Cards = props => (
    <React.Fragment>
        {props.monsters.map(monster => (
            <div className="card mx-1 my-1" style={{ width: '15rem' }} key={monster.id}>
                <CardList monster={monster}/>
            </div>
        ))};
    </React.Fragment>
);