import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "../styles/menuBar.css";

class MenuBar extends Component {
   
    render() {
        return (
            <div className="root">
            <AppBar position="static">
                <Toolbar>
                <IconButton className="menuButton" color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className="topBar">
                    RetailFinder
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

export default MenuBar;