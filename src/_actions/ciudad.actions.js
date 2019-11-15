import { userService } from '../_services/';
import { history } from '../_helpers';

export const ciudadAction = {
    getCiudad,
    getCiudadById,
    onChangeProps,
    editCiudadInfo,
    createCiudad,
    deleteCiudadById
};

function getCiudad(){
    return dispatch => {
        let apiEndpoint = 'ciudades';
        userService.get(apiEndpoint)
            .then((response)=>{
                console.log(response);
                dispatch(changeCiudadesList(response.data.data));
            }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function createCiudad(payload){
    return dispatch => {
        let apiEndpoint = 'ciudades/';
        userService.post(apiEndpoint, payload)
            .then((response)=>{
                dispatch(createUserInfo());
                history.push('/ciudad');
            })
    }
}

function getCiudadById(id){

    return dispatch => {
        let apiEndpoint = 'ciudades/'+ id;
        userService.get(apiEndpoint)
            .then((response)=>{
                dispatch(editCiudadesDetails(response.data.data));
            })
    };
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function editCiudadInfo(id, payload){
    return dispatch => {
        let apiEndpoint = 'ciudades/'+ id;
        userService.put(apiEndpoint, payload)
            .then((response)=>{
                dispatch(updatedUserInfo());
                history.push('/ciudad');
            })
    }
}

function deleteCiudadById(id){
    return dispatch => {
        let apiEndpoint = 'ciudades/'+ id;
        userService.deleteDetail(apiEndpoint)
            .then((response)=>{
                dispatch(deleteCiudadesDetails());
                dispatch(ciudadAction.getCiudad());
            })
    };
}

export function changeCiudadesList(ciudad){
    return{
        type: "FETECHED_ALL_CIUDAD",
        ciudad: ciudad
    }
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editCiudadesDetails(ciudad){
    return{
        type: "CIUDAD_DETAIL",
        id: ciudad._id,
        name: ciudad.name,
        mobile: ciudad.mobile,
        phone_number: ciudad.phone_number,
        address: ciudad.address
    }
}

export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}

export function createUserInfo(){
    return{
        type: "USER_CREATED_SUCCESSFULLY"
    }
}

export function deleteCiudadesDetails(){
    return{
        type: "DELETED_CIUDAD_DETAILS"
    }
}