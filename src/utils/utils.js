import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
// https://www.npmjs.com/package/sweetalert2
// eslint-disable-next-line no-unused-vars
export const toastInfo = (title, message, timeout) => {
  MySwal.fire({
    icon: "success",
    title: title,
    text: message,
    toast: true,
    position: "top",
    timer: timeout || 3000
  });
};

export const toastError = (title, message, timeout) => {
  MySwal.fire({
    icon: "error",
    title: title,
    text: message,
    toast: true,
    position: "top",
    timer: timeout || 5000
  });
};

export const isIterable = function(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
};

export const isString = function(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
};
