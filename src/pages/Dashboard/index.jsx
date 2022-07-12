import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Link} from "@mui/material";
import Typography from "@mui/material/Typography";
import video from '../../assets/img/video.mp4'

class Dashboard extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
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
                <div className={classes.page_content}>
                    <Typography color="white" variant="h6" component="h6">
                        <p className={classes.heading_one}>It's all about your need</p>
                    </Typography>
                    <Typography  color="white" variant="h1" component="h1">
                        <p className={classes.heading_two}>Feed <em className={classes.heading_two_em}>your family</em> the best</p>
                    </Typography>
                    <div className={classes.video_container}>
                        <video className={classes.bg_video} autoPlay muted loop>
                            <source src={video} type="video/mp4"/>
                        </video>
                        <div className={classes.video_overlay}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styleSheet)(Dashboard);