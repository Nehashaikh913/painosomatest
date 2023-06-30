import { axiosApi } from "../config";

export const getGalleryApi = async () => {
    let response;
    try {
        response = await axiosApi.get('/image').then((res) =>   res.data)
        
    } catch (error) {
        return error
    }

    return response;
}

export const addGalleryApi = async (data) => {
    let response;
    try {
        response = await axiosApi.post('/image',data)
        
    } catch (error) {
        return error
    }

    return response;
}

export const deleteGalleryApi = async (id,data) => {
    let response;
    try {
        response = await axiosApi.delete(`/image/${id}`,data)
        
    } catch (error) {
        return error
    }

    return response;
}

