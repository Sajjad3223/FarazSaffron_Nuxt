import type {BaseDto} from "~/models/baseDto";
import type {RoleDto} from "~/models/role/roleQueries";

export interface UserDto extends BaseDto {
    firstName: string;
    lastName: string;
    fullName: string;
    nationalId: string;
    phoneNumber: string;
    confirmCode: string;
    email: string;
    password: string;
    avatar: string;
    addresses: AddressDto[];
    roles: RoleDto[];
    wallets: WalletDto[];
}

export interface AddressDto extends BaseDto {
    receiverFirstName: string;
    receiverLastName: string;
    receiverPhoneNumber: string;
    state: string;
    city: string;
    street: string;
    postCode: string;
    plaque: number;
    unit: number;
    isActiveAddress: boolean;
}

export interface WalletDto extends BaseDto {
    userId: number;
    price: number;
    description: string;
    isFinally: boolean;
    finallyDate: Date;
    walletType: EWalletType;
    refCode?: string;
}

export enum EWalletType {
    Deposit,
    Withdraw
}