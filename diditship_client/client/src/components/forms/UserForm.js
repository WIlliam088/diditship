import React from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'

import { getUser, saveUser, updateField} from '../../actions/userActions'

class UserForm extends React.Component {

    constructor(props) {
        super(props)
        // Bind the this context to the handler function
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {

    }

    handleChange = e => {
        const { dispatch } = this.props
        dispatch(updateField(e.target.name, e.target.value))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.saveSuccess) {
            this.setState({ open: true })
        }
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    state = {
        open: false,
        vertical: 'top',
        horizontal: 'center',
    }

    handleSubmit = e => {
        e.preventDefault()
        const {
            dispatch,
            username,
            password,
            firstName,
            lastName,
            changePwdReqd,
            isAdmin,
            active,
        } = this.props

        const user = {
            username,
            password,
            firstName,
            lastName,
            changePwdReqd,
            isAdmin,
            active,
        }

        dispatch(saveUser(user))
    }

    render() {

        const {
            isLoading,
            isError,
            saveSuccess,
            id,
            username,
            password,
            firstName,
            lastName,
            changePwdReqd,
            isAdmin,
            active,
        } = this.props

        return (
            <div className="baseContainer projectForm">
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={this.state.open}
                    className="success"
                    onClose={this.handleClose}
                    autoHideDuration={2000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">User saved</span>}
                />
                <h1>
                    {firstName} {lastName} {active}
                </h1>
                <div>
                    <TextField
                        label="First Name"
                        name="firstName"
                        margin="normal"
                        variant="outlined"
                        className="name-field"
                        value={firstName}
                        onChange={this.handleChange}
                    />
                    <TextField
                        label="Last Name"
                        name="lastName"
                        margin="normal"
                        variant="outlined"
                        className="name-field"
                        value={lastName}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        label="Username"
                        name="username"
                        margin="normal"
                        variant="outlined"
                        className="name-field"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        className="name-field"
                        value={password}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <div id="active" className="btn">{active}</div>
                </div>
                <div>
                    <div id="changePwdReqd" className="btn">{changePwdReqd}</div>
                </div>
                <div>
                    <div id="isAdmin" className="btn">{isAdmin}</div>
                </div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        )
    }
}

UserForm.defaultProps = {

}

UserForm.propTypes = {
    isLoading: T.bool,
    isError: T.bool,
    saveSuccess: T.bool,
    id: T.number,
    firstName: T.string,
    lastName: T.string,
    username: T.string,
    password: T.string,
    changePwdReqd: T.bool,
    active: T.bool,
    isAdmin: T.bool,
}

function mapStateToProps(state) {
    const { userForm } = state
    return {
        isError: userForm.isError,
        saveSuccess: userForm.saveSuccess,
        id: userForm.id,
        firstName: userForm.firstName,
        lastName: userForm.lastName,
        username: userForm.username,
        password: userForm.password,
        changePwdReqd: userForm.changePwdReqd,
        isAdmin: userForm.isAdmin,
        active: userForm.active,
    }
}

export default connect(mapStateToProps)(UserForm)
