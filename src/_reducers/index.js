import {combineReducers} from 'redux';

import {authentication} from './auth.reducer';
import {ciudad} from "./ciudad.reducer";
import {profesor} from "./profesor.reducer";
import {grupo} from "./grupo.reducer";
import {estudiante} from "./estudiante.reducer";


const rootReducer = combineReducers({
    authentication,
    ciudad,
    profesor,
    grupo,
    estudiante
});

export default rootReducer;
