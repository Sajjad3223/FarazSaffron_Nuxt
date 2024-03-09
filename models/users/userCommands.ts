import type {EWalletType} from "~/models/users/userDto";

export interface RegisterCommand {
    phoneNumber: string;
    password: string;
}

export interface LoginCommand {
    phoneNumber: string;
    password: string;
}

export interface CreateUserCommand {
    firstName: string;
    lastName: string;
    nationalId: string;
    phoneNumber: string;
    email: string;
    password: string;
}

export interface EditUserCommand {
    firstName: string;
    lastName: string;
    nationalId: string;
    phoneNumber: string;
    email: string;
}

export interface ChangePasswordCommand {
    userId?: number;
    oldPassword: string;
    newPassword: string;
}

export interface AdminEditUserCommand {
    userId: number;
    firstName: string;
    lastName: string;
    nationalId: string;
    phoneNumber: string;
    email: string;
    password: string;
}

export interface AdminSetUserRolesCommand {
    userId: number;
    roleIds: number[];
}

export interface AdminChargeWalletCommand {
    userId: number;
    amount: number;
    description?:string;
    walletType:EWalletType;
}

export interface AdminFinalizeWalletCommand {
    userId: number;
    walletId: number;
    refCode: string;
}