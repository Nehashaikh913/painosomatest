import { axiosApi } from "../config";

export const getAuthorsApi = async () => {
    let response;
    try {
        response = await axiosApi.get('/author').then((res) =>   res.data)
        
    } catch (error) {
        return error
    }

    return response;
}

export const addAuthorApi = async (data) => {
    let response;
    try {
        response = await axiosApi.post('/author',data)
        
    } catch (error) {
        return error
    }

    return response;
}

export const updateAuthorApi = async (id,data) => {
    let response;
    try {
        response = await axiosApi.put(`/author/${id}`,data)
        
    } catch (error) {
        return error
    }

    return response;
}

export const deleteAuthorApi = async (id) => {
    let response;
    try {
        response = await axiosApi.delete(`/author/${id}`)
        
    } catch (error) {
        return error
    }

    return response;
}

export const statusAuthorApi = async (data) => {
    let response;
    try {
        response = await axiosApi.put(`/author/status/${data.id}`,data)
        
    } catch (error) {
        return error
    }

    return response;
}