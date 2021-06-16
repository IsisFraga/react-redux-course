import React from 'react'

export default function Fragment(props) {
    return (
        <React.Fragment> 
            <h2>Fragmento</h2>
            <p>Usando desta forma é possível utilizar propriedades / atributos</p>
        </React.Fragment>

        // <>
        //     <h2>Fragmento 2</h2>
        //     <p>Usando desta forma NÃO é possível utilizar propriedades</p>
        // </>
    )
}