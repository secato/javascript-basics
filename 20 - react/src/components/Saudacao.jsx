import React, { Component } from 'react'


// alem desse exemplo ser um exemplo de component utilizando classe
// este exemplo demonstrar o conceito de componente controlado
// o react trabalho com o estado atualizando o componente, ou seja, o componente só renderiza
// valores a partir do estado. Tanto que até para atualizar um campo que é controlado ( um input por exemplo)
// é necessário utilizar um evento on change para capturar o valor e passar esse valor para o estado
// conforme demonstrado a seguir

// além disso foi reforçado que as propriedades de uma classe se acessa com this.props
// e esses valores são somente leitura

// para atualizar o estado se utilizar this.setState({objeto})

// o estado tem a verdade absoluta

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this)
        
        // this.setNome = this.setNome.bind(this)
        // como nao bindei tenho que usar arrow se nao a referencia do this na funcao setNome
        // buga
        // o this na funcao arrow tem o escopo da funcao
        // se fosse uma function normal o this tem a referencia de quem chamou

    }

    setTipo(e) {
        // let i = 1
        // executa a cada 1s
        // setInterval(() => {
        //     this.setState({ tipo: ++i })
        // }, 1000)
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..."
                    value={tipo} onChange={this.setTipo} />

                <input type="text" placeholder="Nome..."
                    value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}