import React from 'react';

const Card = ({property}) => {
    const {picture, text} = property;
    return (
        <div className="card">
            <img src={picture} alt={text} />
            <div className="details">
                <p className="text">{text}</p>
            </div>
        </div>
    )
}


export default Card;