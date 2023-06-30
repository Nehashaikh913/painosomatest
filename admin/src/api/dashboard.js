import { axiosApi } from "../config";

export const getblogdescApi = async () => {
    let response;
    try {
        response = await axiosApi.get('/blog/desc').then((res) =>   res.data)
        
    } catch (error) {
        return error
    }

    console.log(response)

    return response;
}
