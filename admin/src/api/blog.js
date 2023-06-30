import { axiosApi } from "../config";

export const getblogApi = async () => {
    let response;
    try {
        response = await axiosApi.get('/blog').then((res) =>   res.data)
        
    } catch (error) {
        return error
    }

    return response;
}

export const addBlogApi = async (data) => {
    let response;
    try {
        response = await axiosApi.post('/blog',data)
        
    } catch (error) {
        return error
    }

    return response;
}

export const updateBlogApi = async (id,data) => {
    let response;
    try {
        response = await axiosApi.put(`/blog/${id}`,data)
        
    } catch (error) {
        return error
    }

    return response;
}

export const deleteBlogApi = async (id) => {
    let response;
    try {
        response = await axiosApi.delete(`/blog/${id}`)
        
    } catch (error) {
        return error
    }

    return response;
}