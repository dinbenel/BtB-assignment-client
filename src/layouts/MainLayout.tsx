import Header from "@/shared/AppHeader/Header.component";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <main className="container h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
