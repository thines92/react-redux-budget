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

    render() {
        return (
            <div>
                Transaction Table
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions
    }
}
export default connect(
    mapStateToProps,
    {
        fetchTransactions
    }
)(TransactionTable);