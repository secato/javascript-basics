import React from 'react'

// exportando multiplos components

// se uso export default ja exporto a funcao anonima direto (sem const, let e bla)
// o default é o que será carregado por padrao no modulo
// os outros precisam ser importados usando o operador destructuring

export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

// export default BoaTarde

export default { BoaTarde, BoaNoite }