import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <tr>
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
        <table>
          {expenses.map((elem, id) => (
            <tr key={ id }>
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
                  type="button"
                >
                  Editar
                </button>
                <button
                  type="button"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Table);
