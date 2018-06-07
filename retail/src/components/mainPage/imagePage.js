import React, {Component} from 'react';
import {styles} from "../styles/imagePage";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';

class ImagePage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.myBackground}>
                 <div class={classes.introText}>
                    <p class={classes.welcomeText}> Welcome To RetailFinder!</p>
                    <p class={classes.findText}> Find a local Retailer Near You</p>
                    <TextField
                    className={classes.myText}
                    fullWidth
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                    }}
                />
                 </div>
                
            </div>
        );
    }
}

ImagePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImagePage);
