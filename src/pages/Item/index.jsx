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

function createData(code, description, price, quantity) {
    return { code, description, price, quantity };
}

const rows = [
    createData('I-000001', 'Tomato', '350.00', '15'),
    createData('I-000002', 'Coconut', '100.00', '24'),
    createData('I-000003', 'Carrot', '220.00', '46'),
    createData('I-000004', 'Garlic', '75.00', '30')
];

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            form_data: {
                code: '',
                description: '',
                price: '',
                quantity: ''
            },
            form_fields: {
                code_field: TextField,
                description_field: TextField,
                price_field: TextField,
                quantity_field: TextField
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
                                <p className={classes.title}>Item <em className={classes.title_em}> Manage</em></p>
                            </Typography>
                        </div>
                        <div className={classes.form_container}>
                            <div className={classes.form_left}>
                                <TextField className={classes.TextField}
                                           required
                                           id="outlined-required-input"
                                           label="Code"
                                           onChange={(e)=>{
                                               let form_data = this.state.form_data;
                                               let form_fields = this.state.form_fields;
                                               form_data.code = e.target.value;
                                               form_fields.code_field = e.target;
                                               this.setState({form_data,form_fields});
                                           }}
                                />
                                <TextField className={classes.TextField}
                                           required
                                           id="outlined-required-input"
                                           label="Price"
                                           onChange={(e)=>{
                                               let form_data = this.state.form_data;
                                               let form_fields = this.state.form_fields;
                                               form_data.price = e.target.value;
                                               form_fields.price_field = e.target;
                                               this.setState({form_data,form_fields});
                                           }}
                                />
                            </div>
                            <div className={classes.form_right}>
                                <TextField className={classes.TextField}
                                           required
                                           id="outlined-required-input"
                                           label="Description"
                                           onChange={(e)=>{
                                               let form_data = this.state.form_data;
                                               let form_fields = this.state.form_fields;
                                               form_data.description = e.target.value;
                                               form_fields.description_field = e.target;
                                               this.setState({form_data,form_fields});
                                           }}
                                />
                                <TextField className={classes.TextField}
                                           required
                                           id="outlined-required-input"
                                           label="Quantity"
                                           onChange={(e)=>{
                                               let form_data = this.state.form_data;
                                               let form_fields = this.state.form_fields;
                                               form_data.quantity = e.target.value;
                                               form_fields.quantity_field = e.target;
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
                                    let form_fields = this.state.form_fields;
                                    form_fields.code_field.value = '';
                                    form_fields.description_field.value = '';
                                    form_fields.price_field.value = '';
                                    form_fields.quantity_field.value = '';
                                }}
                                style={{marginLeft: '15px'}}
                            />
                            <RButton
                                color="success"
                                size="large"
                                label="Save"
                                onClick={() => {
                                    let form_data = this.state.form_data;
                                    console.log(form_data.code);
                                    console.log(form_data.description);
                                    console.log(form_data.price);
                                    console.log(form_data.quantity);
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
                                            <StyledTableCell>Code</StyledTableCell>
                                            <StyledTableCell>Description</StyledTableCell>
                                            <StyledTableCell>Price</StyledTableCell>
                                            <StyledTableCell>Quantity</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.code}>
                                                <StyledTableCell component="th" scope="row">
                                                    {row.code}
                                                </StyledTableCell>
                                                <StyledTableCell>{row.description}</StyledTableCell>
                                                <StyledTableCell>{row.price}</StyledTableCell>
                                                <StyledTableCell>{row.quantity}</StyledTableCell>
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
export default withStyles(styleSheet)(Item);