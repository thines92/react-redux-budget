import React from "react"

import { fetchTransactions, addTransaction } from "../actions/transactionActions"
import { connect } from "react-redux"
import AddCategory from './addCategory'
import Transaction from './transaction'

class TransactionTable extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        console.log(this.props)
        this.props.fetchTransactions();
    }

    renderTransactions = () => {
        console.log('this.props', this.props)
        return this.props.transactions.map((transaction, i) => {
            return <Transaction key={transaction.id.toString()} transaction={transaction} />
        })
    }

    addTransaction = (income, source) => {
        console.log('these props', this.props)
        this.props.addTransaction({
            id: this.props.transactions.length,
            income: income,
            source: source
        })
    }

    render() {
        console.log('this', this)
        return (
            <div>
                <AddCategory addTransaction={this.addTransaction.bind(this)} />
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Income</th>
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
    console.log('state', state)
    return state.transactions
}
export default connect(
    mapStateToProps,
    {
        fetchTransactions,
        addTransaction
    }
)(TransactionTable);