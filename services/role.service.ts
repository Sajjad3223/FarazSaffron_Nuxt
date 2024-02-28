import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {RoleDto, RoleFilterParams, RoleFilterResult} from "~/models/role/roleQueries";
import type {EditRoleCommand, SetPermissionsCommand} from "~/models/role/roleCommands";

export const GetRoles = (params:RoleFilterParams):Promise<ApiResponse<RoleFilterResult>> => {
    return FetchApi("/admin/role",{
        method:'GET',
        params
    });
}
export const GetRolesOfUser = (userId:number):Promise<ApiResponse<RoleDto[]>> => {
    return FetchApi(`/admin/role/user/${userId}`,{
        method:'GET'
    });
}
export const GetRole = (roleId:number):Promise<ApiResponse<RoleDto>> => {
    return FetchApi(`/admin/role/${roleId}`,{
        method:'GET',
    });
}
export const CreateRole = (title:string):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/role`,{
        method:'POST',
        body:{
            title
        }
    });
}
export const EditRole = (command:EditRoleCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/role`,{
        method:'PUT',
        body:command
    });
}
export const SetRolePermissions = (command:SetPermissionsCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/role/permissions`,{
        method:'PUT',
        body:command
    });
}