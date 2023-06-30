import { axiosApi } from "../config";

export const login = async (data) => {
    let response;
    console.log(data)
    try {
        response = await axiosApi.post('/login',data) 
    } catch (error) {
        return error
    }

    return response;
}


export const addRegisterApi = async (data) => {
    let response;
    try {
        response = await axiosApi.post('/register',data)
        
    } catch (error) {
        return error
    }

    return response;
}