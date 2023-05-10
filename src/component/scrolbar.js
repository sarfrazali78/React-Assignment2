import React from 'react';
import './scrolbar.css'

export default function Card(props){
    return(
        <div className='design1'>
            <img src={props.image} alt="profile"/>
            <h3>{props.designation}</h3>
                <h2>{props.name}</h2>
                <p>{props.jobDescription}</p> 

        </div>
    )
}