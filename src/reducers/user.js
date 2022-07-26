// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'addUser':
    return {
      email: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;
