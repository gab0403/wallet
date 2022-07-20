import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newActionUser } from '../actions';
import logo from '../images/dinheiro-icone.png';
import '../styles/Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isLoginButtonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmailAndPassword = this.validateEmailAndPassword.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateEmailAndPassword());
  }

  validateEmailAndPassword() {
    const { email, password } = this.state;
    const emailValidate = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
    const mailValidator = emailValidate.test(email);
    const minLengthValue = 6;
    const passwordValidate = password.length >= minLengthValue;
    if (mailValidator && passwordValidate) {
      this.setState({ isLoginButtonDisabled: false });
    } else {
      this.setState({ isLoginButtonDisabled: true });
    }
  }

  render() {
    const { email, password, isLoginButtonDisabled } = this.state;
    const { formDispatch, history } = this.props;
    return (
      <div>
        <div className="container-logo">
          <img className="logo" src={ logo } alt="logo" />
        </div>
        <div className="container-login">
          <h1>Login</h1>
          <form>
            <label htmlFor="email">
              <input
                className="nome_login"
                data-testid="email-input"
                type="email"
                name="email"
                value={ email }
                placeholder="Email"
                onChange={ (e) => this.handleChange(e) }
              />
            </label>

            <label htmlFor="password">
              <input
                className="nome_login"
                data-testid="password-input"
                type="password"
                name="password"
                value={ password }
                placeholder="Senha"
                onChange={ (e) => this.handleChange(e) }
              />
            </label>
          </form>
          <button
            className="button_login"
            type="button"
            disabled={ isLoginButtonDisabled }
            onClick={ () => {
              formDispatch(email);
              history.push('/carteira');
            } }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  formDispatch: (payload) => dispatch(newActionUser(payload)),
});

Login.propTypes = {
  formDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
