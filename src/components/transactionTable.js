import React from 'react'
import { fetchTransactions, addTransaction, deleteTransaction } from '../actions/transactionActions'
import { connect } from 'react-redux'
import TransactionForm from './transactionForm'
import Transaction from './transaction'

class TransactionTable extends React.Component {
    
    componentDidMount = () => {
        this.props.fetchTransactions();
    }

    renderTransactions = () => {
        return this.props.transactions.map((transaction, i) => {
            return <Transaction key={transaction.id.toString()} transaction={transaction} deleteTransaction={this.deleteTransaction} />
        })
    }

    deleteTransaction = (id) => {
        this.props.deleteTransaction(id);
    }

    addTransaction = (type, source) => {
        this.props.addTransaction({
            id: this.props.transactions.length,
            type: type,
            source: source
        })
    }

    render() {
        return (
            <div className="ui container stackable">
                <TransactionForm addTransaction={this.addTransaction.bind(this)} />
                <table className="ui two column celled table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTransactions()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.transactions
}
export default connect(
    mapStateToProps,
    {
        fetchTransactions,
        addTransaction,
        deleteTransaction
    }
)(TransactionTable);