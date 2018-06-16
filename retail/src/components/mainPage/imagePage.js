import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import LocationOn from '@material-ui/icons/LocationOn';
import InputAdornment from '@material-ui/core/InputAdornment';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
//import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import NativeSelect from '@material-ui/core/NativeSelect';

import Grid from '@material-ui/core/Grid';

import "../styles/mainPage.css";

class ImagePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            shopType: '',
            location: 'Porto, Portugal'
        };
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleClick = (event) => {
        this.props.onSearchClick(this.state);
    }

    render() {
        return (
            <div className="mainPage">
            <Grid container spacing={24} className="grid">
                <Grid item xs={12} className="gridItem">
                    <p >Welcome To RetailFinder!</p>
                </Grid>
                <Grid item xs={12} className="gridItem">
                    <p >Find a local Retailer Near You</p>
                </Grid>
                <Grid item xs={3}/>
                <Grid item xs={3} className="gridItem">
                <TextField
                    fullWidth
                    value={this.state.location}
                    onChange={this.handleChange('location')}
                    id="input-with-icon-textfield"
                    label="Location"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationOn />
                            </InputAdornment>
                        ),
                    }}
                />
                </Grid>
                <Grid item xs={3}>
                <InputLabel htmlFor="shopType">Shop Type</InputLabel>
                <NativeSelect
                    fullWidth
                    value={this.state.shopType}
                    onChange={this.handleChange('shopType')}
                    input={<Input id="shopType" />}
                >
                    <option value="" />
                    <option value="Floristas">Florista</option>
                    <option value="Cabeleireiros">Cabeleireiro</option>
                    <option value="Serralharias">Serralharias</option>
                </NativeSelect>
                <FormHelperText>Select A Shop Category</FormHelperText>
                </Grid>
                <Grid item xs={3}/>
                <Grid item xs={12} className="gridItem">
                <Button color="primary" variant="contained"  onClick={(event) => this.handleClick(event)}>
                    Procurar
                </Button>
                </Grid>
            </Grid>
            </div>
        );
    }
}

export default ImagePage;


/*
<div className="mainPage">
<Grid container >
    <div className="myBackground">
    <Grid item xs={12}>
        <p > Welcome To RetailFinder!</p>
    </Grid>
    <Grid item xs={12}>
        <p > Find a local Retailer Near You</p>
    </Grid>
    
    <FormControl >
        <Grid item xs={6}>
        <TextField
            
            fullWidth
            id="input-with-icon-textfield"
            label="Location"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <LocationOn />
                    </InputAdornment>
                ),
            }}
        />
        </Grid>
        <Grid item xs={6}>
            <InputLabel htmlFor="age-native-helper">Shop Type</InputLabel>
            <NativeSelect
                value={this.state.shopType}
                onChange={this.handleChange('shopType')}
                input={<Input id="age-native-helper" />}
            >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
            </NativeSelect>
            <FormHelperText>Some important helper text</FormHelperText>
        </Grid>
    </FormControl>
    </div>
</Grid>
</div>

*/