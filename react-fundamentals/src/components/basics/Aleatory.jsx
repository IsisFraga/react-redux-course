import React from 'react'

export default function getRandom(min, max) {
    var min = 0
    var max = 50
    var number = Math.floor(Math.random() * (max - min)) + min
    
    return (
        <div>
            <h2>Número aleatório</h2>
            <p>O número é { number }</p>
        </div>
    )
}