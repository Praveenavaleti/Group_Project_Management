import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManagerHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-manager"));
  console.log(user);

  const managerLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-manager");
    sessionStorage.removeItem("manager-jwtToken");
    window.location.reload(true);
    navigate("home");
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link
          to="/user/manager/project/all"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">My Projects</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/employee/register"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Register Student</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/user/employee/all"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">View All Students</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/change/password"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Change Password</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={managerLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default ManagerHeader;
