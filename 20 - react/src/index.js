import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'

// const elemento = <h1>React app</h1>

// import {BoaTarde, BoaNoite} from './components/Multiplos'
import Multi from './components/Multiplos'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Felipe" idade={29} />
        <Multi.BoaNoite nome='Ana' />
    </div>,
    document.getElementById('root')
)