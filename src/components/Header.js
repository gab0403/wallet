import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/Header.css';
import logo from '../images/dinheiro-icone.png';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;

    const totalField = expenses.length > 0 ? (
      expenses.map((elem) => (
        Number(elem.value) * Number(elem.exchangeRates[elem.currency].ask)))
    ).reduce((acc, valor) => acc + valor) : (0);
    return (
      <div className="header">
        <header className="container-header">
          <img className="logo-header" src={ logo } alt="logo" />
          <div className="container-email">
            <h2 data-testid="email-field" className="email">
              { email }
            </h2>
          </div>
          <div className="container-despesa">
            <h2 className="despesa">
              Total de despesa: R$
            </h2>
            <h2 data-testid="total-field" className="despesa">
              { totalField.toFixed(2) }
            </h2>
            <h2 data-testid="header-currency-field" className="despesa">
              BRL
            </h2>
          </div>
        </header>
      </div>
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
