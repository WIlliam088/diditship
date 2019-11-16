import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from "../actions/loginFormActions";
import LoginForm from "./LoginForm";
import '../styles/about-page.css';

export class LoginPage extends Component {

  handleLoginFormInputs  = e => {
    this.props.actions.handleLoginFormInputs(this.props.loginSubmit, e.target.name, e.target.value);
  }

  saveToken = () => {
    this.props.actions.saveToken(this.props.loginSubmit);
  }

  updatePassword = () => {
    this.props.actions.updatePassword(this.props.loginSubmit);
  }

  render() {
    return (
      <LoginForm
        loginSubmit={this.props.loginSubmit}
        onChange={this.handleLoginFormInputs}
        handleSubmit={this.saveToken}
        updatePassword={this.updatePassword}
      />
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
  loginSubmit: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    loginSubmit: state.loginSubmit
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
