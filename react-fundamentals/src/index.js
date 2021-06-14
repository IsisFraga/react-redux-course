import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import WithParam from './components/basics/WithParam'

const el = document.getElementById('root')


ReactDOM.render(
    <div id="app">
        <First></First>
        <WithParam
            titulo="Segundo Componente"
            aluno="Pedro Silva"
            nota={9.3} />
    </div>, 
el)