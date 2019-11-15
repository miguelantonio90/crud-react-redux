import {userService} from '../_services/';
import {history} from '../_helpers';

export const grupoAction = {
    getGrupo,
    getGrupoById,
    onChangeProps,
    editGrupoInfo,
    createGrupo,
    deleteGrupoById,
    getProfesor
};

function getGrupo() {
    return dispatch => {
        let apiEndpoint = 'grupos';
        userService.get(apiEndpoint)
            .then((response) => {
                console.log(response);
                dispatch(changeGruposList(response.data.data));
            }).catch((err) => {
            console.log("Error");
            console.log(err);
        })
    };
}

function getProfesor() {
    return dispatch => {
        let apiEndpoint = 'profesores';
        userService.get(apiEndpoint)
            .then((response) => {
                console.log(response);
                dispatch(changeProfesorList(response.data.data));
            }).catch((err) => {
            console.log("Error");
            console.log(err);
        })
    };
}

function createGrupo(payload) {
    return dispatch => {
        let apiEndpoint = 'grupos/';
        userService.post(apiEndpoint,payload)
            .then((response) => {
                dispatch(createUserInfo());
                history.push('/grupo');
            })
    }
}

function getGrupoById(id) {

    return dispatch => {
        let apiEndpoint = 'grupos/' + id;
        userService.get(apiEndpoint)
            .then((response) => {
                dispatch(editGruposDetails(response.data.data));
            })
    };
}

function onChangeProps(props,event) {
    return dispatch => {
        dispatch(handleOnChangeProps(props,event.target.value));
    }
}

function editGrupoInfo(id,payload) {
    return dispatch => {
        let apiEndpoint = 'grupos/' + id;
        userService.put(apiEndpoint,payload)
            .then((response) => {
                dispatch(updatedUserInfo());
                history.push('/grupo');
            })
    }
}

function deleteGrupoById(id) {
    return dispatch => {
        let apiEndpoint = 'grupos/' + id;
        userService.deleteDetail(apiEndpoint)
            .then((response) => {
                dispatch(deleteGruposDetails());
                dispatch(grupoAction.getGrupo());
            })
    };
}

export function changeGruposList(grupo) {
    return {
        type: "FETECHED_ALL_GRUPO",
        grupo: grupo
    }
}

export function changeProfesorList(listProfesor) {
    return {
        type: "FETECHED_ALL_PROFESOR",
        listProfesor: listProfesor
    }
}

export function handleOnChangeProps(props,value) {
    return {
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editGruposDetails(grupo) {
    return {
        type: "GRUPO_DETAIL",
        id: grupo._id,
        name: grupo.name,
        profesor: grupo.profesor
    }
}

export function updatedUserInfo() {
    return {
        type: "USER_UPDATED"
    }
}

export function createUserInfo() {
    return {
        type: "USER_CREATED_SUCCESSFULLY"
    }
}

export function deleteGruposDetails() {
    return {
        type: "DELETED_GRUPO_DETAILS"
    }
}