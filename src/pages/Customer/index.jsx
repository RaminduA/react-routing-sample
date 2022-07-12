import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Link} from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RButton from "../../components/common/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';

const genders = [
    { label: 'Male'},
    { label: 'Female'}
    ];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, gender, nic, email) {
    return { name, gender, nic, email };
}

const rows = [
    createData('Saman', 'Male', '200114381172', 'saman616@gmail.com'),
    createData('Kapila', 'Male', '199935787126', 'kapilaraja@gmail.com'),
    createData('Nedeeka', 'Female', '200362561723', 'nadeeabc@gmail.com'),
    createData('Kamala', 'Female', '199674387372', 'kamalagamage@gmail.com')
];

class Customer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            form_data: {
                name: '',
                gender: '',
                nic: '',
                email: ''
            },
            form_fields: {
                name_field: TextField,
                gender_field: Autocomplete,
                nic_field: TextField,
                email_field: TextField
            }
        }
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
                    <div className={classes.left_side}>
                        <div className={classes.title_container}>
                            <Typography color="white" variant="h2">
                                <p className={classes.title}>Customer <em className={classes.title_em}> Manage</em></p>
                            </Typography>
                        </div>
                        <div className={classes.form_container}>
                            <div className={classes.form_left}>
                                <TextField className={classes.TextField}
                                    required
                                    id="outlined-required-input"
                                    label="Name"
                                    onChange={(e)=>{
                                        let form_data = this.state.form_data;
                                        let form_fields = this.state.form_fields;
                                        form_data.name = e.target.value;
                                        form_fields.name_field = e.target;
                                        this.setState({form_data,form_fields});
                                    }}
                                />
                                <TextField className={classes.TextField}
                                    required
                                    id="outlined-required-input"
                                    label="NIC"
                                    onChange={(e)=>{
                                        let form_data = this.state.form_data;
                                        let form_fields = this.state.form_fields;
                                        form_data.nic = e.target.value;
                                        form_fields.nic_field = e.target;
                                        this.setState({form_data,form_fields});
                                    }}
                                />
                            </div>
                            <div className={classes.form_right}>
                                <Autocomplete className={classes.TextField}
                                    disablePortal
                                    id="combo-box-demo"
                                    options={genders}
                                    renderInput={(params) => <TextField
                                                                                            {...params}
                                                                                            label="Gender"
                                                                                            required
                                                                                            id="outlined-required-input"
                                                                                            /*onChange={(e)=>{
                                                                                                let form_data = this.state.form_data;
                                                                                                let form_fields = this.state.form_fields;
                                                                                                form_data.gender = e.target.value;
                                                                                                form_fields.gender_field = e.target;
                                                                                                this.setState({form_data,form_fields});
                                                                                            }}*//>
                                    }
                                    onChange={(e)=>{
                                        let form_data = this.state.form_data;
                                        let form_fields = this.state.form_fields;
                                        form_data.gender = e.target.value;
                                        form_fields.gender_field = e.target;
                                        this.setState({form_data,form_fields});
                                    }}
                                />
                                <TextField className={classes.TextField}
                                           required
                                           id="outlined-required-input"
                                           label="Email"
                                           onChange={(e)=>{
                                               let form_data = this.state.form_data;
                                               let form_fields = this.state.form_fields;
                                               form_data.email = e.target.value;
                                               form_fields.email_field = e.target;
                                               this.setState({form_data,form_fields});
                                           }}
                                />
                            </div>
                        </div>
                        <div className={classes.button_container}>
                            <RButton
                                color="error"
                                size="large"
                                label="Clear"
                                onClick={() => {
                                    //this.resetCount()

                                }}
                                style={{marginLeft: '15px'}}
                            />
                            <RButton
                                color="success"
                                size="large"
                                label="Save"
                                onClick={() => {
                                    let form_data = this.state.form_data;
                                    console.log(form_data.name);
                                    console.log(form_data.gender);
                                    console.log(form_data.nic);
                                    console.log(form_data.email);
                                }}
                                style={{marginLeft: '15px'}}
                            />
                        </div>
                    </div>
                    <div className={classes.right_side}>
                        <div className={classes.table_container}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Name</StyledTableCell>
                                            <StyledTableCell>Gender</StyledTableCell>
                                            <StyledTableCell>NIC</StyledTableCell>
                                            <StyledTableCell>Email</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell component="th" scope="row">
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell>{row.gender}</StyledTableCell>
                                                <StyledTableCell>{row.nic}</StyledTableCell>
                                                <StyledTableCell>{row.email}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styleSheet)(Customer);