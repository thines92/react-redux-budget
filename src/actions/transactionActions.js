export const fetchTransactions = () => {
    return {
        type: "FETCH_TRANSACTIONS"
    }
}

export const addTransaction = (transaction) => {
    console.log('action', transaction)
    return {
        type: "ADD_TRANSACTION",
        payload: transaction
    }
}