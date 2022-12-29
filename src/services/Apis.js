import {commonrequest} from "./ApiCall"
import {BASE_URL} from "./helper"

export const registerfunc = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/user/register`,data,header);
}

export const usergetfunc = async(search,gender,status,sort,page)=>{
    return await commonrequest("GET",`${BASE_URL}/user/details?search=${search}&gender=${gender}&status=${status}&sort=${sort}&page=${page}`,"");
}

export const singleUsergetfunc = async(id)=>{
    return await commonrequest("GET",`${BASE_URL}/user/${id}`,"");
}

export const editfunc = async(id,data,header)=>{
    return await commonrequest("PUT",`${BASE_URL}/user/edit/${id}`,data,header);
}

export const deletfunc = async(id)=>{
    return await commonrequest("DELETE",`${BASE_URL}/user/delete/${id}`,{});
}

export const statuschangefunc = async(id,data)=>{
    return await commonrequest("PUT",`${BASE_URL}/user/status/${id}`,{data})
}

export const exporttocsvfunc = async()=>{
    return await commonrequest("GET",`${BASE_URL}/userexport`,"");
}