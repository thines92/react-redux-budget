export default (state = {
    transactions: [
        {
            id: 0,
            type: 'Credit',
            source: 'test'
        },
        {
            id: 1,
            type: 'Credit',
            source: 'anothertest'
        },
        {
            id: 2,
            type: 'Debit',
            source: 'differenttest'
        }
    ],
    error: null
}, action) => {
    switch (action.type) {
        case "FETCH_TRANSACTIONS": {
            return { ...state }
        }
        case "ADD_TRANSACTION": {
            console.log('payload', action.payload)
            return { ...state, transactions: [...state.transactions, action.payload] };
        }
        default:
            return state;
    }
}