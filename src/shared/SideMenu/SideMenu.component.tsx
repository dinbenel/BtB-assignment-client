import { useSideMenuStore } from "@/store/sideMenu.store";
import { Sheet, SheetContent } from "../ui/sheet";
import { routeNames } from "@/constants/routeNames";
import { headerStr } from "@/constants/stringRes";
import { useUserStore } from "@/store/user.store";
import UserMenuItem from "../UserMenuItem/UserMenuItem.component";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  const { isOpen, setSideMenuOpen } = useSideMenuStore((state) => ({
    isOpen: state.isOpen,
    setSideMenuOpen: state.setIsOpen,
  }));
  const { user, logout } = useUserStore((state) => ({
    user: state.loggedUser,
    logout: state.logout,
  }));

  const onOpenSideMenu = (open: boolean) => {
    setSideMenuOpen(open);
  };

  const onClickMenuItem = (path: string) => {
    navigate(path);
    setSideMenuOpen(false);
  };

  return (
    <Sheet onOpenChange={onOpenSideMenu} open={isOpen}>
      <SheetContent className="w-1/2 flex flex-col items-center capitalize">
        {user && (
          <>
            <UserMenuItem
              label={headerStr.home}
              onClickMenuItem={onClickMenuItem}
              path={routeNames.home}
            />
            <UserMenuItem
              label={headerStr.episode}
              onClickMenuItem={onClickMenuItem}
              path={routeNames.episode}
            />
            <UserMenuItem
              label={headerStr.location}
              onClickMenuItem={onClickMenuItem}
              path={routeNames.location}
            />
          </>
        )}
        {user ? (
          <UserMenuItem
            label={headerStr.logOut}
            onClickMenuItem={() => {
              logout();
              setSideMenuOpen(false);
            }}
            path={""}
          />
        ) : (
          <UserMenuItem
            label={headerStr.login}
            onClickMenuItem={onClickMenuItem}
            path={routeNames.login}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
