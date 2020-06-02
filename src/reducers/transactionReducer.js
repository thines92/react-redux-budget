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
      const filteredTransactions = state.transactions.filter(
        (transaction) => transaction.id != action.payload
      );

      return {
        ...state,
        transactions: filteredTransactions,
      };
    }
    case "EDIT_TRANSACTION": {
      const editedTransactionIndex = state.transactions.find(
        (transaction) => transaction.id == action.payload.id
      );
      const editedTransactions = state.transactions.splice(
        editedTransactionIndex,
        action.payload
      );

      return {
        ...state,
        transactions: editedTransactions,
      };
    }
    default:
      return state;
  }
};
