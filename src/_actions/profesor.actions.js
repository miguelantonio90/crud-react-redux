import {userService} from '../_services/';
import {history} from '../_helpers';
import {createUserInfo,updatedUserInfo} from "./user.actions";

export const profesorAction = {
    getProfesor,
    getProfesorById,
    onChangeProps,
    editProfesorInfo,
    createProfesor,
    deleteProfesorById
};

function getProfesor() {
    return dispatch => {
        let apiEndpoint = 'profesores';
        userService.get(apiEndpoint)
            .then((response) => {
                console.log(response);
                dispatch(changeProfesoresList(response.data.data));
            }).catch((err) => {
            console.log("Error");
            console.log(err);
        })
    };
}

function createProfesor(payload) {
    return dispatch => {
        let apiEndpoint = 'profesores/';
        userService.post(apiEndpoint,payload)
            .then((response) => {
                dispatch(createUserInfo());
                history.push('/profesor');
            })
    }
}

function getProfesorById(id) {

    return dispatch => {
        let apiEndpoint = 'profesores/' + id;
        userService.get(apiEndpoint)
            .then((response) => {
                dispatch(editProfesoresDetails(response.data.data));
            })
    };
}

function onChangeProps(props,event) {
    return dispatch => {
        dispatch(handleOnChangeProfesorProps(props,event.target.value));
    }
}

function editProfesorInfo(id,payload) {
    return dispatch => {
        let apiEndpoint = 'profesores/' + id;
        userService.put(apiEndpoint,payload)
            .then((response) => {
                dispatch(updatedUserInfo());
                history.push('/profesor');
            })
    }
}

function deleteProfesorById(id) {
    return dispatch => {
        let apiEndpoint = 'profesores/' + id;
        userService.deleteDetail(apiEndpoint)
            .then((response) => {
                dispatch(deleteProfesoresDetails());
                dispatch(profesorAction.getProfesor());
            })
    };
}

export function changeProfesoresList(profesor) {
    return {
        type: "FETECHED_ALL_PROFESOR",
        profesor: profesor
    }
}

export function handleOnChangeProfesorProps(props,value) {
    return {
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editProfesoresDetails(profesor) {
    return {
        type: "PROFESOR_DETAIL",
        id: profesor._id,
        name: profesor.name,
        lastName: profesor.lastName
    }
}

export function deleteProfesoresDetails() {
    return {
        type: "DELETED_PROFESOR_DETAILS"
    }
}