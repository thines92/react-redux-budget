import React from 'react';
import * as transaction from '../actions/transactionActions'

class Transaction extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            income: '',
            source: '',
            transactions: [
                {
                    income: '1',
                    source: 'test'
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state)
    }

    handleSubmit(event) {
        console.log(this.state);
        console.log(event)
        event.preventDefault();
        this.setState(state => {
            const transactions = state.transactions.concat({ income: this.state.income, source: this.state.source });

            return {
                transactions,
                income: '',
                source: ''
            }
        })
        console.log(this.state)
    }

    renderTransactions() {
        const transactionStyle = {
            display: 'flex',
            justifyContent: 'center',
            width: '50%'
        }
        
        return this.state.transactions.map((transaction, i) => {
            return (
                <div key={i} style={transactionStyle}>
                    <p style={{ width: '50%' }}>{transaction.income}</p>
                    <p style={{ width: '50%' }}>{transaction.source}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="income" value={this.state.income} onChange={this.handleChange} />
                    <input type="text" name="source" value={this.state.source} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <div>
                    {this.renderTransactions()}
                </div>
            </div>
        )
    }
}

export default Transaction;