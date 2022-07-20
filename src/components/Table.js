import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem } from '../actions';
import '../styles/Table.css';

class Table extends React.Component {
  constructor() {
    super();
    this.remove = this.remove.bind(this);
  }

  remove(id) {
    const { expenses, deleteExpense } = this.props;
    const filterRemove = expenses.filter((elem) => elem.id !== id);
    deleteExpense(filterRemove);
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <div className="table-wrapper">
          <tr className="table">
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </div>
        <div className="container-result">
          <table className="table-result">
            {expenses.map((elem, id) => (
              <tr key={ id } className="result-table">
                <td>{elem.description}</td>
                <td>{elem.tag}</td>
                <td>{elem.method}</td>
                <td>{(Number(elem.value)).toFixed(2)}</td>
                <td>
                  {(elem.exchangeRates[elem.currency].name).split('/Real')}
                </td>
                <td>
                  {Number((elem.exchangeRates)[elem.currency].ask).toFixed(2)}
                </td>
                <td>
                  {(((elem.exchangeRates)[elem.currency].ask) * elem.value).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    className="button-editar-excluir"
                    type="button"
                  >
                    Editar
                  </button>
                  <button
                    className="button-editar-excluir"
                    type="button"
                    onClick={ () => this.remove(id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (index) => dispatch(removeItem(index)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
