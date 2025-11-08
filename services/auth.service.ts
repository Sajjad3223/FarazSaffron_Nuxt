import type {ChangePasswordCommand, FillDataCommand, LoginCommand, RegisterCommand} from "~/models/users/userCommands";
import type {ApiResponse} from "~/models/apiResponse";
import type {LoginResultDto} from "~/models/users/loginResultDto";
import {FetchApi} from "~/utilities/CustomApiFetch";

export const Login = (command:LoginCommand):Promise<ApiResponse<LoginResultDto>> => {
    return FetchApi("/auth/login",{
        method:'POST',
        body:command
    });
}

export const LoginOrRegister = (phoneNumber:string):Promise<ApiResponse<undefined>> => {
    return FetchApi("/auth/loginUser",{
        method:'POST',
        body:{
            phoneNumber
        }
    });
}
export const LoginOtp = (phoneNumber:string,otpCode:string):Promise<ApiResponse<LoginResultDto>> => {
    return FetchApi("/auth/otp",{
        method:'POST',
        body:{
            phoneNumber,
            otpCode
        }
    });
}
export const FillData = (command:FillDataCommand):Promise<ApiResponse<LoginResultDto>> => {
    return FetchApi("/auth/fillData",{
        method:'POST',
        body:command
    });
}

export const Register = (command:RegisterCommand):Promise<ApiResponse<LoginResultDto>> => {
    return FetchApi("/auth/register",{
        method:'POST',
        body:command
    });
}

export const ChangePassword = (command:ChangePasswordCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/auth/change-password",{
        method:'PUT',
        body:command
    });
}

export const ForgetPassword = (phoneNumber:string):Promise<ApiResponse<undefined>> => {
    return FetchApi("/auth/forget-password",{
        method:'PUT',
        body:{
            phoneNumber
        }
    });
}
export const VerifyForgetPassword = (phoneNumber:string,code:string):Promise<ApiResponse<undefined>> => {
    return FetchApi("/auth/confirm-forget-password",{
        method:'PUT',
        body:{
            phoneNumber,
            code
        }
    });
}
export const ChangePasswordForgetPassword = (phoneNumber:string,newPassword:string):Promise<ApiResponse<undefined>> => {
    return FetchApi("/auth/change-password-forget",{
        method:'PUT',
        body:{
            phoneNumber,
            newPassword
        }
    });
}