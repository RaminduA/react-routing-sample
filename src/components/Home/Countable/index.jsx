import { Component } from "react";
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import RButton from "../../common/Button";

class Countable extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    increaseCount(){
        //console.log('Increment Button Triggered');
        this.setState({
            count: this.state.count + 1
        })
    }

    decreaseCount(){
        //console.log('Decrement Button Triggered');
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCount(){
        //console.log('Reset Button Triggered');
        this.setState({
            count: 0
        })
    }

    render(){
        return(
            <div>
                <Typography variant="h4" gutterBottom>
                    Count: {this.state.count}
                </Typography>

                {/* <Button variant='contained' onClick={()=>{
                    //console.log("Clicked the Button");
                    this.increaseCount()
                }}>Increase</Button>
                <Button variant='outlined' onClick={()=>{
                    //console.log("Clicked the Button");
                    this.decreaseCount()
                }}>Decrease</Button>
                <Button variant="outlined" color="error" onClick={()=>{
                    //console.log("Clicked the Button");
                    this.resetCount()
                }}>Reset</Button> */}

                <RButton 
                    label="Increase"
                    variant="contained"
                    color="success"
                    onClick={() => {
                        this.increaseCount()

                    }}
                    style={{marginLeft: '15px'}}
                />
                <RButton 
                    label="Decrease"
                    variant="contained"
                    onClick={() => {
                        this.decreaseCount()

                    }}
                    style={{marginLeft: '15px'}}
                />
                <RButton 
                    label="Reset"
                    variant="contained"
                    color="error"
                    onClick={() => {
                        this.resetCount()

                    }}
                    style={{marginLeft: '15px'}}
                />
            </div>
        )
    }
}

export default Countable