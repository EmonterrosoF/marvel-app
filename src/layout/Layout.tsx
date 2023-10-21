import { Outlet } from "react-router-dom";
import { Navigation } from "../components";

export const Layout = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="px-7 m-auto max-w-7xl">
        <Outlet />
      </div>
      <footer className="dark:bg-gray-900 py-10 px-6 dark:text-white">
        <span>&copy; </span>Derechos reservados{" "}
        <span>{new Date().getFullYear()}</span>
      </footer>
    </>
  );
};
