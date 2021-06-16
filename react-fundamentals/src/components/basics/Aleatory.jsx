import React from 'react'

export default function getRandom(min, max) {
    const min = 0
    const max = 50
    const number = Math.floor(Math.random() * (max - min)) + min
    
    return (
        <div>
            <h2>Número aleatório</h2>
            <p>O número é { number }</p>
        </div>
    )
}