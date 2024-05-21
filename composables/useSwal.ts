import Swal from "sweetalert2";
import type {MetaData} from "~/models/metaData";

export class Toast {
    constructor(
        public message: string,
        public type: ToastType,
        public duration: number = 3000
    ) {}

    public static Error(message: string, duration: number = 3000) {
        return new Toast(message, ToastType.error, duration);
    }
}
export enum ToastType {
    info = "info",
    success = "success",
    warning = "warning",
    error = "error",
}

export const useToast = () => {
    const showToast = (
        message: string="عملیات با موفقیت انجام شد",
        type: ToastType = ToastType.success,
        duration: number = 3000,
        toast:boolean = false
    ) => {
        switch (type) {
            case ToastType.success: {
                return Swal.fire({
                    title:message,
                    toast:toast,
                    position:toast ? "top-start" : "center",
                    icon:'success',
                    timerProgressBar: duration > 0,
                    timer:duration,
                    confirmButtonText:'باشه'
                })
            }
            case ToastType.error: {
                return Swal.fire({
                    title:message,
                    toast:toast,
                    position:toast ? "top-start" : "center",
                    icon:'error',
                    timerProgressBar: duration > 0,
                    timer:duration,
                    confirmButtonText:'باشه'
                })
            }
            case ToastType.warning: {
                return Swal.fire({
                    title:message,
                    toast:toast,
                    position:toast ? "top-start" : "center",
                    icon:'warning',
                    timerProgressBar: duration > 0,
                    timer:duration,
                    showConfirmButton:true,
                    confirmButtonText:'بله',
                    showCancelButton:true,
                    cancelButtonText:'انصراف',
                })
            }
            case ToastType.info: {
                return Swal.fire({
                    title:message,
                    toast:toast,
                    position:toast ? "top-start" : "center",
                    icon:'info',
                    timerProgressBar: duration > 0,
                    timer:duration,
                    confirmButtonText:'باشه'
                })
            }
        }
    };
    const showError = (
        metaData: MetaData,
        toast:boolean = false
    ) => {
        return Swal.fire({
            title:'عملیات با شکست مواجه شد',
            text:metaData.message,
            toast,
            position:toast ? "top-start" : "center",
            icon:'error',
            timerProgressBar:toast,
            timer:3000,
            confirmButtonText:'باشه'
        })
    };

    return { showToast,showError };
};