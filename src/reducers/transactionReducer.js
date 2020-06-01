export default (state = {
    transactions: [],
    error: null
}, action) => {
    switch (action.type) {
        case "FETCH_TRANSACTIONS": {
            return {...state, transaction: [
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
            ]}
        }
        case "ADD_TRANSACTION": {
            return {...state.transactions, transactions: action.payload};
        }
    }
    return state;
}