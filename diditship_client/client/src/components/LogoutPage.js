import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from "../actions/loginFormActions";
import '../styles/about-page.css';

export class LogoutPage extends Component {

  componentDidMount() {
    localStorage.setItem('token', "");
    this.props.history.push("/login");
  }

  render() {
    return(<div></div>);
  }
}

LogoutPage.propTypes = {

};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutPage);
