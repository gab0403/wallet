// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',

};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_COINS':
    return { ...state, isFetching: true };
  case 'REQUEST_COINS':
    return { ...state, currencies: action.payload, isFetching: false };
  case 'FAILED_REQUEST':
    return { ...state, error: action.payload, isFetching: false };
  case 'GET_EXPENSE':
    return { ...state, isFetching: true };
  case 'REQUEST_EXPENSES':
    return { ...state, expenses: [...state.expenses, action.payload] };
  case 'FAIL_REQUEST':
    return { ...state, error: action.payload, isFetching: false };
  case 'addWallet':
    return { expenses: action.payload };
  default:
    return state;
  }
}

export default walletReducer;
