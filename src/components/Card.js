import React from 'react'

const Card = (props) => {
    let user = props.user;
    return (
        <div className="user-card">
            <h3>{user.name} ({user.username})</h3>
            <p>{`${user.address.suite}, ${user.address.street}, ${user.address.city} - ${user.address.zipcode}`}</p>
            <a href="tel:">Call - {user.phone}</a>
            <a href="mailto:">Email - {user.email}</a>
        </div>
    )
}

export default Card;
