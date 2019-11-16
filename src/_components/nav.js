import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {userActions} from '../_actions';
import {connect} from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import LogoutIcon from '@material-ui/icons/HighlightOff';
import CiudadIcon from '@material-ui/icons/LocationCity';
import ProfesorIcon from '@material-ui/icons/People'
import GrupoIcon from '@material-ui/icons/Accessibility'
import EstudianteIcon from '@material-ui/icons/VerifiedUser'


const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});


class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchor: 'left',
        }
    }

    logout = event => {
        const {dispatch} = this.props;
        console.log(this.props);
        console.log(localStorage.getItem('auth'));
        dispatch(userActions.logout());
    }

    render() {
        const {classes} = this.props;
        const {anchor} = this.state;

        return (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor={anchor}
            >
                <div className={classes.toolbar}/>
                <Divider/>
                <List component="nav">
                    <ListItem button component='a' href="/home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>

                    <ListItem button component='a' href="/estudiante">
                        <ListItemIcon>
                            <EstudianteIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Estudiantes"/>
                    </ListItem>

                    <ListItem button component='a' href="/grupo">
                        <ListItemIcon>
                            <GrupoIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Grupos"/>
                    </ListItem>
                    <Divider/>

                    <ListItem button component='a' href="/ciudad">
                        <ListItemIcon>
                            <CiudadIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Ciudad"/>
                    </ListItem>

                    <ListItem button component='a' href="/profesor">
                        <ListItemIcon>
                            <ProfesorIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Profesor"/>
                    </ListItem>
                    <Divider/>

                    <ListItem button onClick={(event) => {
                        this.logout()
                    }}>
                        <ListItemIcon>
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Logout"/>
                    </ListItem>
                </List>
                <Divider/>
            </Drawer>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const {loggingIn} = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(withStyles(styles)(Navigation));