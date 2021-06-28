import "./App.css";
import React from "react";

import First from "./components/basics/First";
import WithParam from "./components/basics/WithParam";
import Fragment from "./components/basics/Fragment";
import Aleatory from "./components/basics/Aleatory";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card title="#05 - Componente com Filhos" color="#00C8F8">
          <Family lastName="Andrade">
            <FamilyMember name="Gustavo" />
            <FamilyMember name="Eron" />
            <FamilyMember name="Igor" />
          </Family>
        </Card>

        <Card title="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatory />
        </Card>

        <Card title="#03 - Fragmento" color="#E94C6F">
          <Fragment />
        </Card>

        <Card title="#02 - Com parâmetro" color="#E8B71A">
          <WithParam
            titulo="Segundo Componente"
            aluno="Pedro Silva"
            nota={9.3}
          />
        </Card>

        <Card title="#01 - Primeiro Componente" color="#588C73">
          <First />
        </Card>
      </div>
    </div>
  );
};
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
