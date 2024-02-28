import type {EPermission} from "~/models/role/roleQueries";

export interface EditRoleCommand{
    roleId:number;
    title:string;
}

export interface SetPermissionsCommand{
    roleId:number;
    permissions:EPermission[];
}