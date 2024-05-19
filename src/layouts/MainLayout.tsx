import Header from "@/shared/AppHeader/Header.component";
import SideMenu from "@/shared/SideMenu/SideMenu.component";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <main className="container h-full">
        <Outlet />
      </main>
      <SideMenu />
    </div>
  );
};

export default MainLayout;
