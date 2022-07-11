import { Component } from "react";
import Typography from '@mui/material/Typography';
import ijse_logo from "../../../assets/img/ijse_logo.png";
import {styleSheet} from "./style";
import { withStyles } from "@mui/styles";

class Greeting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container} >
                <div>
                    <Typography variant="h1" gutterBottom component="div">
                        Hello {this.props.name}
                    </Typography>
                </div>
                <div>
                   <img src={ijse_logo} alt="https://www.ijse.lk"/> 
                </div>
            </div>
        )
    }

}

export default withStyles(styleSheet)(Greeting)