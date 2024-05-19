import { routeNames } from "@/constants/routeNames";
import { headerStr } from "@/constants/stringRes";
import UserMenuItem from "@/shared/UserMenuItem/UserMenuItem.component";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { useUserStore } from "@/store/user.store";
import { UserCircle2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const { user, logout } = useUserStore((state) => ({
    user: state.loggedUser,
    logout: state.logout,
  }));
  const userAvatar = user ? "https://github.com/shadcn.png" : "";
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const onClickMenuItem = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <Popover open={isMenuOpen}>
      <PopoverTrigger
        asChild
        className="cursor-pointer"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <Avatar>
          <AvatarImage src={userAvatar} alt="@shadcn" />
          <AvatarFallback className="bg-transparent">
            <UserCircle2 className="" size={80} />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        alignOffset={10}
        sideOffset={10}
        className="w-32 p-0 text-center capitalize font-normal"
      >
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
              setIsMenuOpen(false);
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
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
