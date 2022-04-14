import React, { useState, useEffect} from 'react'
import './style.css'

export const People = () => {
    const [people, setPeople] = useState([])

    useEffect(
        () => {
            fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => {
                setPeople(data.results)
            })
        }
    )

    return (
        <div className="komponenta">
            <h3>People</h3>
            <ul>
                { people.map(person => <li key={person.name}>{person.name}</li>)}
            </ul>
        </div>
    )
}