import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const showSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Anda Berhasil Login",
    showConfirmButton: false,
    timer: 2000,
  });
};

export { showSuccessAlert };
