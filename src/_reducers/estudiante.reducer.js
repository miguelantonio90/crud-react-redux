const initialState = {
    anchor: 'left',
    estudiante: [],
    open: false,
    id: '',
    name: '',
    email: '',
    edad: '',
    sexo: '',
    grupo:'',
    fechaNacimiento: '',
    lugarNacimiento: '',
    listGrupo: [],
    listCiudad: []
};


export function estudiante(state = initialState,action) {
    switch (action.type) {
        case 'FETECHED_ALL_ESTUDIANTE':
            return {
                ...state,
                estudiante: action.estudiante
            };
        case 'FETECHED_ALL_GRUPO':
            return {
                ...state,
                listGrupo: action.listGrupo
            };
        case 'FETECHED_ALL_CIUDAD':
            return {
                ...state,
                listCiudad: action.listCiudad
            };
        case 'ESTUDIANTE_DETAIL':
            return {
                ...state,
                id: estudiante._id,
                name: estudiante.name,
                email: estudiante.email,
                edad: estudiante.edad,
                sexo: estudiante.sexo,
                grupo: estudiante.grupo,
                fechaNacimiento: estudiante.fechaNacimiento,
                lugarNacimiento: estudiante.lugarNacimiento
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };
        default:
            return state
    }
}