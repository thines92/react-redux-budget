export default (state = {
    transactions: [
        {
            id: 0,
            income: '1',
            source: 'test'
        },
        {
            id: 1,
            income: '2',
            source: 'anothertest'
        },
        {
            id: 2,
            income: '3',
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