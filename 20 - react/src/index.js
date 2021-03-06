import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'

// const elemento = <h1>React app</h1>

// import {BoaTarde, BoaNoite} from './components/Multiplos'
// import Multi from './components/Multiplos'
// import Saudacao from './components/Saudacao'

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        {/* <Multi.BoaTarde nome="Felipe" idade={29} />
        <Multi.BoaNoite nome='Ana' /> */}
        {/* <Saudacao tipo="Boa noite" nome="Felipe" /> */}
        <Pai nome="Jesus" sobrenome="Cristo">
            {/* EXEMPLO DE COMENTARIO JSX */}
            {/* COMO PASSAR OS FILHOS AQUI? */}
            <Filho nome="Pedro"/>
            <Filho nome="Paulo" sobrenome="Silva" />
            <Filho nome="Carla" sobrenome="Silva" />

        </Pai>
    </div>,
    document.getElementById('root')
)