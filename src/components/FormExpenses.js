import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormExpenses extends React.Component {
  constructor() {
    super();

    this.state = {
      valor: '',
      descriptionExpense: '',
      coins: '',
      pay: '',
      tag: '',

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    const { coins, valor, descriptionExpense, pay, tag } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            data-testid="value-input"
            type="text"
            name="valor"
            value={ valor }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição da compra
          <input
            data-testid="description-input"
            type="text"
            name="description"
            value={ descriptionExpense }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="coin">
          Moeda
          <select
            name="coins"
            value={ coins }
            id="coin"
            onChange={ this.handleChange }
          >
            {currencies.map(
              (coin, key) => <option key={ key } value={ coin }>{ coin }</option>,
            )}
          </select>
        </label>
        <label htmlFor="pay">
          Pagamento:
          <select
            data-testid="method-input"
            name="pay"
            value={ pay }
            id="pay"
            onChange={ this.handleChange }
          >
            <option> Dinheiro </option>
            <option> Cartão de crédito</option>
            <option> Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          Desespesas:
          <select
            data-testid="tag-input"
            name="tag"
            value={ tag }
            id="tag"
            onChange={ this.handleChange }
          >
            <option> Alimentação </option>
            <option> Lazer </option>
            <option> Trabalho </option>
            <option> Transporte </option>
            <option> Saúde </option>
          </select>
        </label>

      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormExpenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(FormExpenses);
