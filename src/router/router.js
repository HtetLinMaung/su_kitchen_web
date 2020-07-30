import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashbord";

const routes = [
  {
    path: "/admin/login",
    component: Login
  },
  {
    path: "/admin",
    component: Dashboard
  }
];

export default routes;
