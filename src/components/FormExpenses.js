import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchExpense } from '../actions';
import '../styles/FormExpenses.css';

class FormExpenses extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { formDispatch } = this.props;
    formDispatch(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { currencies } = this.props;
    const { currency, value, description, method, tag } = this.state;
    return (
      <form className="forms">
        <label htmlFor="valor">
          Valor:
          <input
            className="input-form"
            data-testid="value-input"
            type="text"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            className="select-form"
            name="currency"
            value={ currency }
            id="currency"
            onChange={ this.handleChange }
          >
            {currencies.map(
              (coin, key) => <option key={ key } value={ coin }>{ coin }</option>,
            )}
          </select>
        </label>
        <label htmlFor="method">
          Pagamento:
          <select
            className="select-form"
            data-testid="method-input"
            name="method"
            value={ method }
            id="method"
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
            className="select-form"
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
        <label htmlFor="description">
          Descrição da compra:
          <input
            className="input-form"
            data-testid="description-input"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <button className="button-despesa" type="button" onClick={ this.handleClick }>
          Adicionar
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  formDispatch: (expenses) => dispatch(fetchExpense(expenses)),
});

FormExpenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  formDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
