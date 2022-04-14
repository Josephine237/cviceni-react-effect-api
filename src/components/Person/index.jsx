import React, { useState, useEffect } from 'react';
import './style.css'

export const Person = () => {
    const [person, setPerson] = useState({})

    useEffect(
        () => {
            fetch('https://swapi.dev/api/people/1/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPerson(data);
            })
        },
        [] 
    );

    return (
        <div className="komponenta">
            <h3>Person</h3>
            <p>Jmeno: {person.name}</p>
            <p>Barva očí: {person.eye_color}</p>
        </div>
    )
}