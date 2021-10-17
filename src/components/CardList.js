import React from 'react'
import Card from './Card';

const CardList = (props) => {
    return (
        <div className="user-wrapper">
            {props.users.map(user => (
                <Card user={user} key={user.id} />
            ))}
        </div>
    )
}

export default CardList;
