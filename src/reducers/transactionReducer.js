export default (state = {
    transactions: [],
    error: null
}, action) => {
    switch (action.type) {
        case "FETCH_TRANSACTIONS": {
            return {...state}
        }
        case "ADD_TRANSACTION": {
            return {...state.transactions, transactions: action.payload};
        }
    }
    return state;
}