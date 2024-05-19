import { routeNames } from "@/constants/routeNames";
import { headerStr } from "@/constants/stringRes";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { useUserStore } from "@/store/user.store";
import { UserCircle2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        <div
          className="p-2 hover:bg-muted cursor-pointer"
          onClick={() => onClickMenuItem(routeNames.home)}
        >
          {headerStr.home}
        </div>
        <hr className="h-[1px] bg-muted w-full cursor-pointer" />
        <div
          className="p-2 hover:bg-muted cursor-pointer"
          onClick={() => onClickMenuItem(routeNames.episode)}
        >
          {headerStr.episode}
        </div>
        <hr className="h-[1px] bg-muted w-full" />
        <div
          className="p-2 hover:bg-muted cursor-pointer"
          onClick={() => onClickMenuItem(routeNames.location)}
        >
          {headerStr.location}
        </div>
        <hr className="h-[1px] bg-muted w-full" />
        <div
          className="p-2 hover:bg-muted cursor-pointer"
          onClick={() => {
            logout();
            setIsMenuOpen(false);
          }}
        >
          {headerStr.logOut}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
