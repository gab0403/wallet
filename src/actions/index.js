// Coloque aqui suas actions
export const newActionUser = (payload) => ({ type: 'addUser', payload });
export const newActionWallet = (payload) => ({ type: 'addWallet', payload });

// Fecth moedas
const GET_COINS = 'GET_COINS';
const REQUEST_COINS = 'REQUEST_COINS';
const FAILED_REQUEST = 'FAILED_REQUEST';

const getCoins = () => ({ type: GET_COINS });

const requestCoins = (payload) => ({
  type: REQUEST_COINS, payload });

const failedRequest = (error) => ({
  type: FAILED_REQUEST, payload: error });

export function fetchCoins() {
  return async (dispatch) => {
    dispatch(getCoins());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const arrayCoins = Object.keys(data);
      const coinsFilter = arrayCoins.filter((coins) => coins !== 'USDT');
      return dispatch(requestCoins(coinsFilter));
    } catch (error) {
      return dispatch(failedRequest(error));
    }
  };
}
