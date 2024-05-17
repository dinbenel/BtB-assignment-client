import { useSideMenuStore } from "@/store/sideMenu.store";
import { Menu } from "lucide-react";

const UserMobileMenu = () => {
  const setIsSideMenuOpen = useSideMenuStore((state) => state.setIsOpen);

  const onOpenSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  return (
    <div>
      <Menu onClick={onOpenSideMenu} />
    </div>
  );
};

export default UserMobileMenu;
