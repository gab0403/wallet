import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;

    const totalField = expenses.length > 0 ? (
      expenses.map((elem) => (
        Number(elem.value) * Number(elem.exchangeRates[elem.currency].ask)))
    ).reduce((acc, valor) => acc + valor) : (0);
    console.log(totalField);
    console.log(expenses.length > 0 && expenses);
    return (
      <header>
        <h2 data-testid="email-field">
          { email }
        </h2>
        <h2>
          Total de despesa: R$
        </h2>
        <h2 data-testid="total-field">
          { totalField.toFixed(2) }
        </h2>
        <h2 data-testid="header-currency-field">
          BRL
        </h2>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
