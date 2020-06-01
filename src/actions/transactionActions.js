export function fetchTransactions() {
    return {
        type: "FETCH_TRANSACTIONS"
    }
}

export function addTransaction(transaction) {
    return {
        type: "ADD_TRANSACTION",
        payload: transaction
    }
}