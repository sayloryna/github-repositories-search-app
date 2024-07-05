import { toast, Bounce } from "react-toastify";

export const notifyError = (errorMessage: string) => {
  toast.error(errorMessage, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    role: "alert",
  });
};
