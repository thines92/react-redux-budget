export function fetchTransactions() {
    return {
        type: "FETCH_TRANSACTIONS",
        payload: [
            {
                income: '1',
                source: 'test'
            },
            {
                income: '2',
                source: 'anothertest'
            },
            {
                income: '3',
                source: 'differenttest'
            }
        ]
    }
}

export function addTransaction(transaction) {
    return {
        type: "ADD_TRANSACTION",
        payload: transaction
    }
}