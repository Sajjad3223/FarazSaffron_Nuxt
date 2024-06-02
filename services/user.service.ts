import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {UserDto, WalletDto, WalletFilterParams, WalletFilterResult} from "~/models/users/userDto";
import type {
    AddUserAddressCommand,
    AdminChargeWalletCommand,
    AdminEditUserCommand, AdminFinalizeWalletCommand,
    AdminSetUserRolesCommand,
    CreateUserCommand,
    EditUserCommand
} from "~/models/users/userCommands";
import type {UserFilterParams, UserFilterResult} from "~/models/users/userQueries";

export const GetCurrentUser = ():Promise<ApiResponse<UserDto>> => {
    return FetchApi("/user/current",{
        method:'GET',
    });
}
export const GetWalletsByAdmin = (filterParams:WalletFilterParams):Promise<ApiResponse<WalletFilterResult>> => {
    return FetchApi(`/admin/user/wallets`,{
        method:'GET',
        params:filterParams
    });
}


export const EditUser = (command:EditUserCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/user",{
        method:'PUT',
        body:command
    });
}
export const EditUserEmail = (email:string):Promise<ApiResponse<undefined>> => {
    return FetchApi("/user/change-email",{
        method:'PUT',
        body:{
            email
        }
    });
}
export const EditUserPhoneNumber = (phoneNumber:string):Promise<ApiResponse<undefined>> => {
    return FetchApi("/user/change-phoneNumber",{
        method:'PUT',
        body:{
            phoneNumber
        }
    });
}

export const ChargeWallet = (amount:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/payment/chargeWallet`,{
        method:'POST',
        //@ts-ignore
        body:amount
    });
}
export const AddUserAddress = (command:AddUserAddressCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/user/address`,{
        method:'POST',
        body:command
    });
}
export const SetAddressAsActive = (addressId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/user/address/${addressId}`,{
        method:'PUT',
    });
}

// Admin
export const GetUsers = (params:UserFilterParams):Promise<ApiResponse<UserFilterResult>> => {
    return FetchApi(`/admin/user`,{
        method:'GET',
        params
    });
}
export const GetUserById = (userId:number):Promise<ApiResponse<UserDto>> => {
    return FetchApi(`/admin/user/${userId}`,{
        method:'GET',
    });
}
export const CreateUserByAdmin = (command:CreateUserCommand):Promise<ApiResponse<number>> => {
    return FetchApi(`/admin/user`,{
        method:'POST',
        body:command
    });
}
export const EditUserByAdmin = (command:AdminEditUserCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/user`,{
        method:'PUT',
        body:command
    });
}
export const SetUserRoles = (command:AdminSetUserRolesCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/user/setRoles`,{
        method:'PUT',
        body:command
    });
}
export const ChargeWalletByAdmin = (command:AdminChargeWalletCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/user/charge-wallet`,{
        method:'PUT',
        body:command
    });
}
export const FinalizeWalletByAdmin = (command:AdminFinalizeWalletCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/user/VerifyChargeWallet`,{
        method:'PUT',
        body:command
    });
}
export const GenerateMobileCode = ():Promise<ApiResponse<undefined>> => {
    return FetchApi(`/user/generateMobileVerification`,{
        method:'POST',
    });
}
export const GenerateEmailCode = ():Promise<ApiResponse<undefined>> => {
    return FetchApi(`/user/generateEmailVerification`,{
        method:'POST',
    });
}
export const VerifyPhoneNumber = (code:string):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/user/verifyPhone`,{
        method:'PUT',
        body: {code}
    });
}
export const VerifyEmail = (code:string):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/user/verifyEmail`,{
        method:'PUT',
        body: {code}
    });
}