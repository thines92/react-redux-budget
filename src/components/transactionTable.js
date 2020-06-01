import React from "react"

import { fetchTransactions, addTransaction } from "../actions/transactionActions"

class TransactionTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Transaction Table
            </div>
        )
    }
}

export default TransactionTable;