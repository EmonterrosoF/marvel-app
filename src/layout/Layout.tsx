import { Outlet } from "react-router-dom";
import { Navigation } from "../components";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="px-7 m-auto max-w-7xl">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
