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
        const filteredTransactions = state.transactions.filter(transaction => transaction.id != action.payload);
        
        return {
            ...state,
            transactions: filteredTransactions
        }
    }
    default:
      return state;
  }
};
