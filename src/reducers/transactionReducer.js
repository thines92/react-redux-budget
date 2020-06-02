import { items } from "../staticItems";

export default (
  state = {
    transactions: items,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_TRANSACTIONS": {
      return { ...state };
    }
    case "ADD_TRANSACTION": {
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    }
    case "DELETE_TRANSACTION": {
        console.log('delete_transaction payload', action.payload)
        const filteredTransactions = state.transactions.filter(id => id == action.payload);
        return {
            ...state,
            filteredTransactions
        }
    }
    default:
      return state;
  }
};
