import { axiosApi } from "../config";

export const getproductsApi = async () => {
    let response;
    try {
        response = await axiosApi.get('/products').then((res) =>   res.data)
        
    } catch (error) {
        return error
    }

    return response;
}

export const addProductsApi = async (data) => {
    let response;
    try {
        response = await axiosApi.post('/products',data)
        
    } catch (error) {
        return error
    }

    return response;
}

export const updateProductsApi = async (id,data) => {
    let response;
    try {
        response = await axiosApi.put(`/products/${id}`,data)
        
    } catch (error) {
        return error
    }

    return response;
}

export const deleteProductsApi = async (id) => {
    let response;
    try {
        response = await axiosApi.delete(`/products/${id}`)
        
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