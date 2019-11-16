import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserList from './List/UserList';
import '../styles/about-page.css';

export class UserListPage extends React.Component {

    render() {
        return (
            <UserList
                loginSubmit={this.props.loginSubmit}
            />
        );
    }
}

UserListPage.propTypes = {
    loginSubmit: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        loginSubmit: state.loginSubmit
    };
}

function mapDispatchToProps() {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListPage);
