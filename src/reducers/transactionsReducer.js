export default (state = [], action) => {
    if (action.type === "FETCH_TRANSACTIONS") {
        return [...state, action.payload]
    }
    return [...state]
}