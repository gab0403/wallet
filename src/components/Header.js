import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h2 data-testid="email-field">
          { email }
        </h2>
        <h2 data-testid="total-field">
          Total de despesa: R$ 0
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
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
