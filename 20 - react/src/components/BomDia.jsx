import React from 'react'


// Para retornar elementos adjacentes é necessário envolver em uma <div>
// Outra maneira a fim de nao usar div é utilizar o React.Fragment
// Tambem e possivel usar array, mas atentar para deteminar o valor da chave

// COMPONENTE FUNCIONAL NAO TEM ESTADO

export default props => [
        <h1 key='h1'>Bom dia {props.nome}!</h1>,
        <h2 key='h2'>Até breve!</h2>    
]

// UTILIZANDO DIRETAMENTE O FRAGMENT (NECESSARIO IMPORTAR)
// export default props =>
//     <Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </Fragment>


// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>