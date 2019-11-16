import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ScheduleList from './List/ScheduleList';
import '../styles/about-page.css';

export class ScheduleListPage extends React.Component {

    render() {
        return (
            <ScheduleList
                loginSubmit={this.props.loginSubmit}
            />
        );
    }
}

ScheduleListPage.propTypes = {
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
)(ScheduleListPage);
