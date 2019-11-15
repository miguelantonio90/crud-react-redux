const initialState = { anchor: 'left',
    ciudad: [],
    open: false,
    id: '',  
    name: ''
 };


export function ciudad(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_CIUDAD':
            return {
            ...state,
            ciudad: action.ciudad
            };
        case 'CIUDAD_DETAIL':
            return {
                ...state,
                id: action.id,  
                name: action.name
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