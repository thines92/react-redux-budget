export const fetchTransactions = (dispatch) => {
    const transactions = [
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

    dispatch({ type: "FETCH_TRANSACTIONS", payload: transactions});
} 

export const addTransaction = (dispatch) => {
    
}