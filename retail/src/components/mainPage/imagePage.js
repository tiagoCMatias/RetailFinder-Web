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
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <TextField
                    className={classes.margin}
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
        );
    }
}

ImagePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImagePage);
