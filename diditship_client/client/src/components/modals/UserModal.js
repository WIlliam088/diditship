import React from "react";
import {saveUser, updateField} from "../../actions/userActions";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import T from "prop-types";
import {connect} from "react-redux";

class UserModal extends React.Component {

    constructor(props) {
        super(props)
        // Bind the this context to the handler function
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }

    handleChange = e => {
        const {dispatch} = this.props
        dispatch(updateField(e.target.name, e.target.value))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.saveSuccess) {
            this.setState({open: true})
        }
    }

    handleClose = () => {
        this.setState({open: false})
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
            show,
            children,
        } = this.props

        const showHideClassName = {show} ? "modal display-block" : "modal display-none";

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    {children}
                    <button onClick={this.handleClose}>close</button>
                </section>

                <div className="baseContainer userForm">
                    <Snackbar
                        anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
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
            </div>
        )
    }
}

UserModal.defaultProps = {

}

UserModal.propTypes = {
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
    const { userFormReducer } = state
    return {
        isError: userFormReducer.isError,
        saveSuccess: userFormReducer.saveSuccess,
        id: userFormReducer.id,
        firstName: userFormReducer.firstName,
        lastName: userFormReducer.lastName,
        username: userFormReducer.username,
        password: userFormReducer.password,
        changePwdReqd: userFormReducer.changePwdReqd,
        isAdmin: userFormReducer.isAdmin,
        active: userFormReducer.active,
    }
}

export default connect(mapStateToProps)(UserModal)