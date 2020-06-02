export const fetchTransactions = () => {
    return {
        type: "FETCH_TRANSACTIONS"
    }
}

export const addCategory = (transaction) => {
    console.log('action', transaction)
    return {
        type: "ADD_TRANSACTION",
        payload: transaction
    }
}

export const deleteTransaction = (transactionId) => {
    return {
        type: "DELETE_TRANSACTION",
        payload: transactionId
    }
}