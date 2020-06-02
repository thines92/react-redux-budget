import React from "react"

import { fetchTransactions, addTransaction } from "../actions/transactionActions"
import { connect } from "react-redux"
import AddCategory from './addCategory'

class TransactionTable extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount = () => {
        console.log(this.props)
        this.props.fetchTransactions();
    }

    renderTransactions = () => {
        const transactionStyle = {
            display: 'flex',
            justifyContent: 'center',
            width: '50%'
        }
        // console.log('props', this.props.transactions)
        
        return this.props.transactions.map((transaction, i) => {
            return (
                <div key={i} style={transactionStyle}>
                    <p style={{ width: '50%' }}>{transaction.income}</p>
                    <p style={{ width: '50%' }}>{transaction.source}</p>
                </div>
            )
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