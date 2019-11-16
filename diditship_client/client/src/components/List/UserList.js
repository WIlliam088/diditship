import React, { useState } from "react"
import T from 'prop-types'
import { connect } from 'react-redux'
import '../../styles/about-page.css'
import {getUsers} from "../../actions/userActions"
import {getColumns} from '../../actions/globalActions'

import MUIDataTable from "mui-datatables"
import TextField from '@material-ui/core/TextField'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import UserListCustomToolbar from "./UserListCustomToolBar";

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const defaultColumnProperties = {
    sortable: true,
    width: 250
}

// const columns = [
//     { key: "id", name: "id", label: "Id", editable: 'false',
//         options: {
//             display: false,
//         } },
//     { key: "first_name", name: "first_name", label: "First Name", editable: 'true' },
//     { key: "last_name", name: "last_name", label: "Last Name", editable: true },
//     { key: "username", name: "username", label: "Username", editable: true }
// ].map(c => ({ ...c, ...defaultColumnProperties }))



class UserList extends React.Component {

    getOptions() {
        const options = {
            filterType: 'dropdown',
            responsive: 'scrollFullHeight',
            stickyHeader: true,
            rowsPerPage: 100,
            selectableRowsHeader: false,
            selectableRows: 'none',
            customToolbar: () => {
                return (
                    <UserListCustomToolbar parentProps={this.props}  onClick={this.openModal}/>
                )
            }
        }
        return options
    }

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            modalIsOpen: false
        }

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    getMuiTheme = () => createMuiTheme({
        typography: {
            useNextVariants: true,
        },
        overrides: {
            MUIDataTableBodyCell: {
                root: {
                    backgroundColor: "#FFFFFF",
                }
            }
        }
    })

    getColumns = e => {
        const {
            dispatch,
            isLoading,
            columns,
        } = this.props

        const columnList = {
            isLoading,
            columns,
        }

        dispatch(getColumns('users'))
    }

    componentDidMount () {

        this.getColumns()

        const {
            dispatch,
            isLoading,
            users,
        } = this.props

        const userList = {
            isLoading,
            users,
        }

        dispatch(getColumns('users'))
        dispatch(getUsers())

        Modal.setAppElement('#userList')
    }

    openModal() {
        console.log('opening modal')
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const {
            isLoading,
            users,
            columns,
        } = this.props

        const customStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
        };

        // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
      //  Modal.setAppElement('.userList')

        return (
            <div id="userList" name="userList" className="baseContainer userList">
                <h1>
                    Users
                </h1>
                <MUIDataTable
                    title={"Users"}
                    data={users}
                    columns={columns.map(c => ({ ...c, ...defaultColumnProperties }))}
                    options={this.getOptions()}
                />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

UserList.defaultProps = {
}

UserList.propTypes = {
    isLoading: T.bool,
    users: T.array,
    columns: T.array,
}

function mapStateToProps(state) {
    const { userListReducer } = state
    return {
        users: userListReducer.users,
        columns: userListReducer.columns,
    }
}

export default connect(mapStateToProps)(UserList)