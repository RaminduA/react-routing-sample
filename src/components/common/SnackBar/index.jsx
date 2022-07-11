import React, { Component } from "react";
import PropTypes from "prop-types";
import {Snackbar} from "@mui/material";
import Alert from "@mui/material/Alert";


class RSnackBar extends Component{
    static propTypes = {
        open: PropTypes.bool,
        className: PropTypes.string, 
        message: PropTypes.string, 
        anchorOrigin: PropTypes.object, 
        children: PropTypes.node, 
        severity: PropTypes.string, 
        autoHideDuration: PropTypes.number
    }

    static defaultProps = {
        open: false,
        className: '', 
        message: '', 
        anchorOrigin: {vertical: 'bottom', horizontal: 'center'},
        severity: 'success', 
        autoHideDuration: 6000,
        variant: 'filled'
    }

    handleButtonClose = (e)=>{
        const {onClose} = this.props;
        onClose && onClose({e});
    }

    renderChildren = (message, children)=>{
        if(message) return message;
        if(children) return children;
    }

    render(){
        const {
            open,
            className,
            severity,
            autoHideDuration,
            anchorOrigin,
            children,
            message,
            variant
        } = this.props;

        return(
            <Snackbar
                open={open}
                className={className}
                anchorOrigin={anchorOrigin}
                autoHideDuration={autoHideDuration}
                onClose={this.handleButtonClose}
            >
                <Alert variant={variant} severity={severity} onClose={this.handleButtonClose}>
                    {this.renderChildren(message, children)}
                </Alert>
            </Snackbar>
        )
    }

}

export default RSnackBar;