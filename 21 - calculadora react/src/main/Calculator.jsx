import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {

        // se o atual for zero, passo o valor da operacao, altero o current pra 1 e limpo o display
        // para começar a digitar o novo numero, assim como a calculadora do mac
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            // qdo for igual vai ter umas tretas diferentes
            const equals = (operation === '=')
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (error) {
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })

        }
        console.log(operation)
    }

    addDigit(n) {
        // validacao para evitar dois pontos
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        // apaga o zero para substituir para outro numero. 
        //Outra possiblidade é se clearDisplay do estado for true
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        // se o display for ser limpo pego valor vazio, se não pego o valor que esta sendo mostrado
        const currentvalue = clearDisplay ? '' : this.state.displayValue

        // pego o valor anterior e concateno com o novo digito
        const displayValue = currentvalue + n

        this.setState({ displayValue, clearDisplay: false })

        // se foi digitado um numero
        if (n !== '.') {
            // indice do array de valores
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values);

        }

    }


    render() {

        // modo de fazer um bind usando arrow function
        // const addDigit = n => this.addDigit(n)
        // const setOperation = op => this.setOperation(op)

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}