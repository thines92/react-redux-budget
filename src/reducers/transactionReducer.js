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
    ]
}, action) => {
    switch (action.type) {
        case "FETCH_TRANSACTIONS": {
            return { ...state }
        }
        case "ADD_TRANSACTION": {
            console.log('payload', action.payload)
            return { ...state.transactions, transactions: [...state.transactions, action.payload] };
        }
        default:
            return state;
    }
}