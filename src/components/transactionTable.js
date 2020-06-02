import React from 'react'

import { fetchTransactions, addCategory, deleteTransaction } from '../actions/transactionActions'
import { connect } from 'react-redux'
import AddCategory from './addCategory'
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

    addCategory = (type, source) => {
        this.props.addCategory({
            id: this.props.transactions.length,
            type: type,
            source: source
        })
    }

    deleteTransaction = (id) => {
        console.log('id', id)
        this.props.deleteTransaction(id);
    }

    render() {
        return (
            <div className="ui container stackable">
                <AddCategory addCategory={this.addCategory.bind(this)} />
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
        addCategory,
        deleteTransaction
    }
)(TransactionTable);