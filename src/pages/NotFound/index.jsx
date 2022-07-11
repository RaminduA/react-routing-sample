import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import RButton from '../../components/common/Button';
import not_found from '../../assets/img/not_found.jpg';
import { Link } from 'react-router-dom';

const styleSheet = () => ({
    container: {
        position: 'relative',
        display: 'flex',
        margin: '0',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        height: '100vh',
        width: '100vw',
        maxHeight: '100vh',
        maxWidth: '100vw'
    },
    img: {
        margin: '0',
        height: '100%',
        width: '100%'
    },
    Link: {
        position: 'absolute',
        top: '75%',
        margin: '0',
        color: 'green',
        transform: 'translateX(-10%)'
    }

})


class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.img_container}>
                    <img className={classes.img} src={not_found} alt="" />
                </div>
                <Link className={classes.Link} to="/">
                    <RButton
                        color="success"
                        size="large"
                        label="Back to home page"
                    />
                </Link>
            </div >
        )
    }
}
export default withStyles(styleSheet)(NotFound);