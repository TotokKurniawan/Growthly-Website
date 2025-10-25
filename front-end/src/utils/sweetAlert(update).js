import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const showSuccessAlert2 = () => {
  Swal.fire({
    icon: "success",
    title: "Data berhasil dirubah!",
    showConfirmButton: false,
    timer: 2000,
  });
};

export { showSuccessAlert2 };
