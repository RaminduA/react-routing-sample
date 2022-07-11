import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Link} from "@mui/material";
import Typography from "@mui/material/Typography";

class Item extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.nav_bar}>
                    <Link href={"/dashboard"} underline="none" style={{margin: '0 3% 0 0'}}>
                        <Typography color="white" variant="body1" component="h2">
                            Home
                        </Typography>
                    </Link>
                    <Link href={"/customer"} underline="none" style={{margin: '0 3% 0 0'}}>
                        <Typography color="white" variant="body1" component="h2">
                            Customers
                        </Typography>
                    </Link>
                    <Link href={"/item"} underline="none" style={{margin: '0 3% 0 0'}}>
                        <Typography color="white" variant="body1" component="h2">
                            Items
                        </Typography>
                    </Link>
                </div>
                <div className={classes.page_content}>
                    <Typography color="white" variant="h1">
                        Items
                    </Typography>
                </div>
            </div>
        )
    }
}
export default withStyles(styleSheet)(Item);