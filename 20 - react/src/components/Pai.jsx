import React from 'react'
import Filho from './Filho'

import { childrenWithProps } from '../utils/utils'


export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome} />
            <Filho nome="João" sobrenome={props.sobrenome} />
            <Filho nome="José" sobrenome={props.sobrenome} /> */}

            {/* exemplo utilizando o operador spread */}
            {/* <Filho {...props} /> */}
            {/* exemplo com spread e trocando o nome */}
            {/* <Filho {...props} nome="Carla" /> */}

            {/* {props.children} */}

            {/* nao funciona para multiplos elementos */}
            {/* {React.cloneElement(props.children, {
                ...props,
                ...props.children.props
            })} */}

            {
                childrenWithProps(props)
            }

        </ul>
    </div>