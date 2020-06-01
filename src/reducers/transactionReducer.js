export default (state = {
    transactions: [
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
    ],
    error: null
}, action) => {
    switch (action.type) {
        case "FETCH_TRANSACTIONS": {
            return { ...state.transactions }
        }
        case "ADD_TRANSACTION": {
            return { ...state.transactions, transactions: action.payload };
        }
        default:
            return state;
    }
}