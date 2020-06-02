import { items } from '../staticItems'

export default (state = {
    transactions: items,
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