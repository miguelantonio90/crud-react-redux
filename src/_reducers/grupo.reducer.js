const initialState = {
    anchor: 'left',
    grupo: [],
    open: false,
    id: '',
    name: '',
    profesor: '',
    listProfesor: []
};


export function grupo(state = initialState,action) {
    switch (action.type) {
        case 'FETECHED_ALL_GRUPO':
            return {
                ...state,
                grupo: action.grupo
            };
        case 'FETECHED_ALL_PROFESOR':
            return {
                ...state,
                listProfesor: action.listProfesor
            };
        case 'GRUPO_DETAIL':
            return {
                ...state,
                id: action.id,
                name: action.name,
                profesor: action.profesor,
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