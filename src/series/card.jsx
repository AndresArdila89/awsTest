import React from 'react';
import './cards.css';

const exercicesInfo = (props) => {
    let description = 
    <div className="card">
        <img src="" alt=""/>
        <p><strong>Objetivo:</strong> {props.objetivo}</p>
        <p><strong>Ejecucion:</strong> {props.ejecucion}</p>
    </div>

    return description;
    
};

export default exercicesInfo ;