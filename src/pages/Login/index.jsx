import React, { Component } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import RButton from "../../components/common/Button";
import RSnackBar from "../../components/common/SnackBar";


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user_name: 'ramindu',
            password: 'ramindu',
            form_data: {
                user_name: '',
                password: ''
            },
            //for snackbar props
            open: false,
            message: '',
            severity: ''
        }
    }

    render(){
        const {classes} = this.props;
        return(
            <div>
                <div className={classes.container}>
                    <div className={classes.title_container}>
                        <Typography variant="h4" gutterBottom component="div">
                            LOGIN
                        </Typography>
                    </div>
                    <div className={classes.form_container}>
                        <TextField
                            required
                            id="outlined-required-input"
                            label="User Name"
                            onChange={(e)=>{
                                let form_data = this.state.form_data;
                                form_data.user_name = e.target.value;
                                this.setState({form_data});
                            }}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e)=>{
                                let form_data = this.state.form_data;
                                form_data.password = e.target.value;
                                this.setState({form_data});
                            }}
                        />
                    </div>
                    <div className={classes.button_container}>
                        <RButton
                            color="success"
                            label="Login"
                            size="large"
                            variant="contained"
                            onClick={()=>{
                                let a = this.state.user_name===this.state.form_data.user_name;
                                let b = this.state.password===this.state.form_data.password;
                                if(a && b){
                                    console.log("User details matched !!!");
                                    this.setState({
                                        open: true,
                                        message: 'User Credentials Sucessfully Matched!',
                                        severity: 'success'
                                    })
                                }else{
                                    console.log("User details doesn't match !!!");
                                    this.setState({
                                        open: true,
                                        message: 'User Credentials Doesn\'t Match!',
                                        severity: 'error'
                                    })
                                }
                            }}
                        />
                    </div>
                </div>
                <RSnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </div>
            
        )
    }
}

export default withStyles(styleSheet)(Login)
//export default Login