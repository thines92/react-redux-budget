import React from "react"

import { fetchTransactions } from "../actions/transactionActions"
import { connect } from "react-redux";

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
        console.log('props', this.props)
        
        return this.props.transactions.transactions.map((transaction, i) => {
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
        fetchTransactions
    }
)(TransactionTable);