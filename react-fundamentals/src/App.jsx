import React from 'react'

import First from './components/basics/First'
import WithParam from './components/basics/WithParam'
import Fragment from './components/basics/Fragment'
import Aleatory from './components/basics/Aleatory'
import Card from './components/layout/Card'

export default() => {
    return (
        <div id="app">
            <h1>Fundamentos React (Arrow)</h1>

            <Card title="#04 - Desafio Aleatório">
                <Aleatory />
            </Card>

            <Card title="#03 - Fragmento">
                <Fragment />
            </Card>

            <Card title="#02 - Com parâmetro">
                <WithParam
                    titulo="Segundo Componente"
                    aluno="Pedro Silva"
                    nota={9.3} 
                />
            </Card>

            <Card title="#01 - Primeiro Componente">
                <First />
            </Card>
    </div>
    );
}
// OUTRA FORMA DE ESCREVER A FUNÇÃO
// utiliza-se o "_" quando não se tem parâmetro para a função
// *************** início da função ******************
// export default _ => 
//     <div id="app">
//         <h1>Fundamentos React (Arrow)</h1>
//         <Fragment />
//         <WithParam
//             titulo="Segundo Componente"
//             aluno="Pedro Silva"
//             nota={9.3} 
//         />
//         <First></First>
//     </div>
// ****************** fim da função *******************