import React,{Component} from 'react';
import './App.css';
import {Router,Switch,Route} from 'react-router-dom';
import {Login} from './login/';
import {Home} from './home/';
import {history} from './_helpers';
import {PrivateRoute} from './_components';
import {Ciudad} from "./ciudades/ciudad.component";
import {AddCiudad} from "./ciudades/new.component";
import {Profesor} from "./profesores/profesor.component";
import {AddProfesor} from "./profesores/new.component";
import {Grupo} from "./gurpos/grupo.component";
import {AddGrupo} from "./gurpos/new.component";
import {Estudiante} from "./estudiantes/estudiante.component";
import {AddEstudiante} from "./estudiantes/new.component";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <div>
                        <Switch>
                            <PrivateRoute exact path='/home' component={Home}/>
                            {/*ciudad*/}
                            <PrivateRoute exact path='/ciudad' component={Ciudad}/>
                            <PrivateRoute exact path='/new-ciudad' component={AddCiudad}/>
                            <PrivateRoute exact path='/edit-ciudad/:id' component={AddCiudad}/>
                            {/*profesor*/}
                            <PrivateRoute exact path='/profesor' component={Profesor}/>
                            <PrivateRoute exact path='/new-profesor' component={AddProfesor}/>
                            <PrivateRoute exact path='/edit-profesor/:id' component={AddProfesor}/>
                            {/*grupo*/}
                            <PrivateRoute exact path='/grupo' component={Grupo}/>
                            <PrivateRoute exact path='/new-grupo' component={AddGrupo}/>
                            <PrivateRoute exact path='/edit-grupo/:id' component={AddGrupo}/>
                            {/*estudiantes*/}
                            <PrivateRoute exact path='/estudiante' component={Estudiante}/>
                            <PrivateRoute exact path='/new-estudiante' component={AddEstudiante}/>
                            <PrivateRoute exact path='/edit-estudiante/:id' component={AddEstudiante}/>
                            <Route exact path='/' component={Login}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
