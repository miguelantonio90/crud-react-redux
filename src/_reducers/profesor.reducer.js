const initialState = { anchor: 'left',
    profesor: [],
    open: false,
    id: '',  
    name: '',
    lastName:''
 };


export function profesor(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_PROFESOR':
            return {
            ...state,
            profesor: action.profesor
            };
        case 'PROFESOR_DETAIL':
            return {
                ...state,
                id: action.id,  
                name: action.name,
                lastName: action.lastName
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