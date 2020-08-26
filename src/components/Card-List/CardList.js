import React from 'react';

export const CardList = props => {
    return (
        <React.Fragment>
            {console.log(props.monster.id)}
            <img src={`https://robohash.org/${props.monster.id}.png?size=150x150`} className="card-img-tops mx-auto " alt="Monster" width="150" height="150"/>
            <div className="card-body">
                <h5 className="card-title text-center">{props.monster.name}</h5>
                <p className="card-text text-muted text-center">{props.monster.email}</p>
            </div>
        </React.Fragment>
    );
};