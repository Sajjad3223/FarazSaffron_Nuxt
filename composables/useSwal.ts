import Swal from "sweetalert2";

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
        duration: number = 3000
    ) => {
        switch (type) {
            case ToastType.success: {
                return Swal.fire({
                    title:message,
                    icon:'success',
                    timerProgressBar:true,
                    timer:duration,
                })
            }
            case ToastType.error: {
                return Swal.fire({
                    title:message,
                    icon:'error',
                    timerProgressBar:true,
                    timer:duration,
                })
            }
            case ToastType.warning: {
                return Swal.fire({
                    title:message,
                    icon:'warning',
                    timerProgressBar:true,
                    timer:duration,
                })
            }
            case ToastType.info: {
                return Swal.fire({
                    title:message,
                    icon:'info',
                    timerProgressBar:true,
                    timer:duration,
                })
            }
        }
    };

    return { showToast };
};