import React, { useState, useEffect} from 'react'
import './style.css'

export const Nameday = () => {
    const [name, setName] = useState('')

    useEffect(
        () => {
            fetch('https://svatky.adresa.info/json')
            .then(response => response.json())
            .then((json) => setName(json[0].name))

        }
    )

    return(
        <>
        <h1>Svátek</h1>
        <div className="nameday">Dnes má svátek {name}</div>
        </>
    )

}