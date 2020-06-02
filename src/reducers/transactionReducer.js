import {
  items
} from "../staticItems";

export default (
  state = {
    transactions: items,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_TRANSACTIONS": {
      return {
        ...state
      };
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
      const editedTransactionIndex = state.transactions.findIndex(
        (transaction) => transaction.id == action.payload.id
      );
      console.log('editedTransactionIndex', editedTransactionIndex)
      console.log('action.payload', action.payload)
      console.log('state.transactions', state.transactions)
      const editedTransactions = state.transactions.splice(
        editedTransactionIndex, 1, action.payload
      );
      console.log('editedTRansactions', editedTransactions)

      return {
        ...state,
        transactions: state.transactions,
      };
    }
    default:
      return state;
  }
};