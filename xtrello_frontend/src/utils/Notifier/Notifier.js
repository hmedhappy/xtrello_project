import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function notify(message, success,delay=5000) {
  success ? toast.success(message,{
    autoClose: delay,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
  }):toast.error(message,{
    autoClose: delay,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
  });
}