import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
import { fetchCoins } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    return (
      <div>
        <Header />
        <FormExpenses />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchCoins()),
});

Wallet.propTypes = {
  getCoins: PropTypes.func.isRequired,

};
export default connect(null, mapDispatchToProps)(Wallet);
