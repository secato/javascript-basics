import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
import BomDia from './components/BomDia'

const elemento = <h1>React app</h1>

ReactDOM.render(
    <BomDia nome="Felipe" idade={29} />,
    document.getElementById('root')
)