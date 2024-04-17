import { toast, Bounce, Zoom, Flip, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const styles = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
  style: {
    background: "var(--toastify-bgr-color)",
    color: "black",
    borderRadius: "20px",
    marginTop: "10vh",
    margin: "10vh 40px 0 40px",
    boxShadow: "0px 0px 15px -6px rgba(0, 0, 0, 1)",
  },
};

export const toastSuccess = (text) => toast.success(text, styles);
export const toastWarning = (text) => toast.warning(text, styles);
export const toastError = (text) => toast.error(text, styles);
export const toastInfo = (text) => toast.info(text, styles);
