import {userService} from '../_services/';
import {history} from '../_helpers';
import {createUserInfo,updatedUserInfo} from "./user.actions";

export const estudianteAction = {
    getEstudiante,
    getEstudianteById,
    onChangeProps,
    editEstudianteInfo,
    createEstudiante,
    deleteEstudianteById,
    getGrupo,
    getCiudad
};

function getEstudiante() {
    return dispatch => {
        let apiEndpoint = 'estudiantes';
        userService.get(apiEndpoint)
            .then((response) => {
                console.log(response);
                dispatch(changeEstudiantesList(response.data.data));
            }).catch((err) => {
            console.log("Error");
            console.log(err);
        })
    };
}

function getGrupo() {
    return dispatch => {
        let apiEndpoint = 'grupos';
        userService.get(apiEndpoint)
            .then((response) => {
                console.log(response);
                dispatch(changeGrupoList(response.data.data));
            }).catch((err) => {
            console.log("Error");
            console.log(err);
        })
    };
}

function getCiudad() {
    return dispatch => {
        let apiEndpoint = 'ciudades';
        userService.get(apiEndpoint)
            .then((response) => {
                console.log(response);
                dispatch(changeCiudadList(response.data.data));
            }).catch((err) => {
            console.log("Error");
            console.log(err);
        })
    };
}

function createEstudiante(payload) {
    return dispatch => {
        let apiEndpoint = 'estudiantes/';
        userService.post(apiEndpoint,payload)
            .then((response) => {
                dispatch(createUserInfo());
                history.push('/estudiante');
            })
    }
}

function getEstudianteById(id) {
    return dispatch => {
        let apiEndpoint = 'estudiantes/' + id;
        userService.get(apiEndpoint)
            .then((response) => {
                dispatch(editEstudiantesDetails(response.data.data));
            })
    };
}

function onChangeProps(props,event) {
    return dispatch => {
        dispatch(handleOnChangeEstutidanteProps(props,event.target.value));
    }
}

function editEstudianteInfo(id,payload) {
    return dispatch => {
        let apiEndpoint = 'estudiantes/' + id;
        userService.put(apiEndpoint,payload)
            .then((response) => {
                dispatch(updatedUserInfo());
                history.push('/estudiante');
            })
    }
}

function deleteEstudianteById(id) {
    return dispatch => {
        let apiEndpoint = 'estudiantes/' + id;
        userService.deleteDetail(apiEndpoint)
            .then((response) => {
                dispatch(deleteEstudiantesDetails());
                dispatch(estudianteAction.getEstudiante());
            })
    };
}

export function changeEstudiantesList(estudiante) {
    return {
        type: "FETECHED_ALL_ESTUDIANTE",
        estudiante: estudiante
    }
}

export function changeGrupoList(listGrupo) {
    return {
        type: "FETECHED_ALL_GRUPO",
        listGrupo: listGrupo
    }
}

export function changeCiudadList(listCiudad) {
    return {
        type: "FETECHED_ALL_CIUDAD",
        listCiudad: listCiudad
    }
}

export function handleOnChangeEstutidanteProps(props,value) {
    return {
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editEstudiantesDetails(estudiante) {
    return {
        type: "ESTUDIANTE_DETAIL",
        id: estudiante._id,
        name: estudiante.name,
        email: estudiante.email,
        edad: estudiante.edad,
        sexo: estudiante.sexo,
        fechaNacimiento: estudiante.fechaNacimiento,
        lugarNacimiento: estudiante.lugarNacimiento
    }
}

export function deleteEstudiantesDetails() {
    return {
        type: "DELETED_ESTUDIANTE_DETAILS"
    }
}