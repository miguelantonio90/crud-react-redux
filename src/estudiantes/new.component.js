import React,{Component} from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {estudianteAction,grupoAction} from '../_actions';
import {withRouter} from 'react-router-dom';
import {FormControl,InputLabel,MenuItem,Select} from "@material-ui/core";


const drawerWidth = 240;

const styles = theme => ({

    root: {
        flexGrow: 1,
    },

    contentRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
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
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },

    formControl: {
        margin: theme.spacing.unit * 2,
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class AddEstudiante extends Component {

    handleChange = prop => event => {
        const {dispatch} = this.props;
        dispatch(estudianteAction.onChangeProps(prop,event));
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        const {dispatch} = this.props;
        dispatch(estudianteAction.getGrupo());
        dispatch(estudianteAction.getCiudad());

        if (params.id) {
            const {dispatch} = this.props;
            dispatch(estudianteAction.getEstudianteById(params.id));
        }
    }


    handleClick(event) {
        const {match: {params}} = this.props;
        const {dispatch} = this.props;

        let payload = {
            name: this.props.estudiante.name,
            email: this.props.estudiante.email,
            edad: this.props.estudiante.edad,
            sexo: this.props.estudiante.sexo,
            grupo: this.props.estudiante.grupo,
            fechaNacimiento: this.props.estudiante.fechaNacimiento,
            lugarNacimiento: this.props.estudiante.lugarNacimiento,
        }

        if (params.id) {
            dispatch(estudianteAction.editEstudianteInfo(params.id,payload));
        } else {
            dispatch(estudianteAction.createEstudiante(payload));
        }
    }

    renderOptionsCiudad() {
        return this.props.estudiante.listCiudad.map((dt,i) => {
            return (
                <MenuItem
                    label="Select a City"
                    value={dt._id}
                    key={i} name={dt.name}>{dt.name}</MenuItem>
            );
        });
    }

    renderOptionsGrupo() {
        return this.props.estudiante.listGrupo.map((dt,i) => {
            return (
                <MenuItem
                    label="Select a City"
                    value={dt._id}
                    key={i} name={dt.name}>{dt.name}</MenuItem>
            );
        });
    }


    render() {
        const {classes} = this.props;
        const {match: {params}} = this.props;
        console.log(this.props.estudiante);


        function InsertText(props) {
            return <Typography>{'Add New Estudiante'}</Typography>;
        }

        function EditText(props) {
            return <Typography>{'Edit Estudiante'}</Typography>;
        }


        function SegHeader() {
            if (params.id) {
                return <EditText/>;
            }
            return <InsertText/>;
        }

        return (

            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar/>
                    <Nav/>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>
                        <Grid container spacing={24}>
                            <Grid item xs={3}>
                                <SegHeader/>
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                            <Grid item xs={3} container justify="flex-end">
                            </Grid>
                        </Grid>
                        <br/>
                        <br/>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <div>
                                    <Paper className={classes.contentRoot} elevation={1}>
                                        <form className={classes.container}>
                                            <Grid container spacing={24}>
                                                <Grid item xs={3}>
                                                    <TextField
                                                        id="name"
                                                        label="Name"
                                                        className={classes.textField}
                                                        value={this.props.estudiante.name}
                                                        onChange={this.handleChange('name')}
                                                        margin="normal"
                                                    />
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <TextField
                                                        id="email"
                                                        label="Email"
                                                        type="email"
                                                        className={classes.textField}
                                                        value={this.props.estudiante.email}
                                                        onChange={this.handleChange('email')}
                                                        margin="normal"
                                                    />
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <TextField
                                                        id="edad"
                                                        label="Edad"
                                                        type="number"
                                                        className={classes.textField}
                                                        value={this.props.estudiante.edad}
                                                        onChange={this.handleChange('edad')}
                                                        margin="normal"
                                                    />
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel id="sexo-select-label">Sexo</InputLabel>
                                                        <Select id="sexo-select"
                                                                value={this.props.estudiante.sexo}
                                                                onChange={this.handleChange('sexo')}>
                                                            <MenuItem value={0}>Male</MenuItem>
                                                            <MenuItem value={1}>Flame</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={24}>
                                                <Grid item xs={3}>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel id="sexo-select-label">Lugar Nacimiento</InputLabel>
                                                        <Select id="sexo-select"
                                                                value={this.props.estudiante.lugarNacimiento}
                                                                onChange={this.handleChange('lugarNacimiento')}>
                                                            {this.renderOptionsCiudad()}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel id="sexo-select-label">Grupo</InputLabel>
                                                        <Select id="sexo-select"
                                                                value={this.props.estudiante.grupo}
                                                                onChange={this.handleChange('grupo')}>
                                                            {this.renderOptionsGrupo()}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <TextField
                                                        id='fechaNacimiento'
                                                        label='Brithday'
                                                        type='date'
                                                        value={this.props.estudiante.fechaNacimiento}
                                                        className={classes.textField}
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                        margin="normal"
                                                    />
                                                </Grid>
                                            </Grid>
                                            <br/>
                                            <Grid container spacing={24}>
                                                <Grid item xs={3}>
                                                </Grid>
                                                <Grid item xs={6}>
                                                </Grid>
                                                <Grid item xs={3} container justify="center">
                                                    <Grid container spacing={24}>
                                                        <Grid item xs={6} container justify="center">
                                                            <Button variant="contained" color="secondary"
                                                                    className={classes.button} component='a'
                                                                    href="/estudiante">
                                                                Cancel
                                                            </Button>
                                                        </Grid>
                                                        <Grid item xs={6} container justify="flex-start">
                                                            <Button variant="contained" color="primary"
                                                                    className={classes.button}
                                                                    onClick={(event) => this.handleClick(event)}>
                                                                Save
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                        </form>
                                    </Paper>
                                </div>
                            </Grid>
                        </Grid>
                    </main>
                </div>
            </div>
        );
    }
}

//export default Home;

AddEstudiante.propTypes = {
    classes: PropTypes.object.isRequired,
};


//export default BoxCon
const mapStateToProps = (state) => {
    return state;
}


const connectedAddEstudiantePage = withRouter(connect(mapStateToProps,null,null,{
    pure: false
})(withStyles(styles)(AddEstudiante)));

export {connectedAddEstudiantePage as AddEstudiante};