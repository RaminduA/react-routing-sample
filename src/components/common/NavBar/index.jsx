import React, {Component} from "react";
import Typography from "@mui/material/Typography";
import {Link} from "@mui/material";
import {withStyles} from "@mui/styles";


let styleSheet = {
    nav_bar: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'end',
        backgroundColor: 'rgba(250,250,250,0.1)',
        height: '9%',
        width: '100%',
        margin: '0',
        zIndex: '3'
    },
    nav_logo: {
        position: 'absolute',
        textTransform: 'uppercase',
        fontWeight: '800',
        fontSize: '30px',
        top: '25%',
        left: '8%',
        margin: '0'
    },
    nav_logo_em: {
        textTransform: 'uppercase',
        color: '#ed563b',
        fontStyle: 'normal',
        margin: '0'
    }
}

class RNavBar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return(
            <div className={classes.nav_bar}>
                <Typography  color="white" variant="h1" component="h1">
                    <p className={classes.nav_logo}>Scorpio <em className={classes.nav_logo_em}> Foods</em></p>
                </Typography>
                <Link href={"/dashboard"} underline="none" style={{margin: '0 4% 0 0'}}>
                    <Typography color="white" variant="body1" component="h2">
                        Home
                    </Typography>
                </Link>
                <Link href={"/customer"} underline="none" style={{margin: '0 4% 0 0'}}>
                    <Typography color="white" variant="body1" component="h2">
                        Customers
                    </Typography>
                </Link>
                <Link href={"/item"} underline="none" style={{margin: '0 10% 0 0'}}>
                    <Typography color="white" variant="body1" component="h2">
                        Items
                    </Typography>
                </Link>
            </div>
        );
    }
}
export default withStyles(styleSheet)(RNavBar);