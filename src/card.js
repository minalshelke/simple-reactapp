import React from 'react';

const Card = (props) =>{
    
    return (
        <div className="bg-light-green dib br">
            <img src="https://robohash.org/test" alt="robots" />
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>
                </div>
        </div>
    );
};

export default Card;