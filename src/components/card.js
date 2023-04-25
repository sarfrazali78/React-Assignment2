import React from 'react';

export default function Profilecard(props) {
    const onClick = () => {
      alert(props.name);
    };
  
    return (
      <div className="card">
        <p>{props.productId}</p>
        <img src={props.productpic} alt="Profile" />
        <h3>{props.productname}</h3>
        <h2>{props.Brand}</h2>
        <p>{props.productDescription}</p>
        <p>{props.price}</p>
        <p>{props.Rating}</p>
        <button onClick={onClick}>See More</button>
      </div>
    );
  };
            
    


