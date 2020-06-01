export function fetchTransactions() {
    return {
        type: "FETCH_TRANSACTIONS",
        payload: transactions
    }
}

export function addTransaction(transaction) {
    return {
        type: "ADD_TRANSACTION",
        payload: transaction
    }
}