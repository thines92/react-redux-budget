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
        return this.props.transactions.map((transaction, i) => {
            return <Transaction income={transaction.income} source={transaction.source} uniq={i} />
        })
    }

    addTransaction = (income, source) => {
        console.log('these props', this.props)
        this.props.addTransaction({
            income: income,
            source: source
        })
    }

    render() {
        return (
            <div>
                <AddCategory addTransaction={this.addTransaction.bind(this)}/>
                {this.renderTransactions()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions.transactions
    }
}
export default connect(
    mapStateToProps,
    {
        fetchTransactions,
        addTransaction
    }
)(TransactionTable);