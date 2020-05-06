import actionTypes from './actionTypes';

export const appReducer = (state , action) => {
    switch(action.type) {
        case actionTypes.DELETE_TRANSACTION:
            return {...state,
                transactions: state.transactions
                .filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state
    }
}