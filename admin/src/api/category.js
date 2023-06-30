import { axiosApi } from "../config";

export const getCategory = async () => {
    let response;
    try {
        response = await axiosApi.get('/category').then((res) =>   res.data)
        
    } catch (error) {
        return error
    }

    console.log(response)

    return response;
}

export const getParentCategoryApi = async () => {
    let response;
    try {
        response = await axiosApi.get('/category/parentcategory').then((res) =>   res.data)
        
    } catch (error) {
        return error
    }
    console.log(response)

    return response;
}

export const getSubCategoryApi = async () => {
    let response;
    try {
        response = await axiosApi.get('/category/subcategory').then((res) =>   res.data)
        
    } catch (error) {
        return error
    }
    console.log(response)

    return response;
}

export const addCategoryApi = async (data) => {
    let response;
    try {
        response = await axiosApi.post('/category',{ cat_name: data.cat_name, parent_category: data.parent_category, cat_desc: data.cat_desc, cat_slug: data.cat_slug, cat_title: data.cat_title, status: data.status })
        
    } catch (error) {
        return error
    }

    return response;
}

export const updateCategoryApi = async (data) => {
    let response;
    try {
        response = await axiosApi.put(`/category/${data.id}`,{ cat_name: data.cat_name, parent_category: data.parent_category, cat_desc: data.cat_desc, cat_slug: data.cat_slug, cat_title: data.cat_title, status: data.status })
        
    } catch (error) {
        return error
    }

    return response;
}

export const deleteCategoryApi = async (data) => {
    let response;
    try {
        response = await axiosApi.delete(`/category/${data}`)
        
    } catch (error) {
        return error
    }

    return response;
}

export const statusCategoryApi = async (data) => {
    let response;
    try {
        response = await axiosApi.put(`/category/status/${data.id}`,data)
        
    } catch (error) {
        return error
    }

    return response;
}