import { routeNames } from "@/constants/routeNames";
import { headerStr } from "@/constants/stringRes";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { useUserStore } from "@/store/user.store";
import { UserCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const user = useUserStore((state) => state.loggedUser);
  const userAvatar = user ? "https://github.com/shadcn.png" : "";

  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
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
        <div className="p-2 hover:bg-muted">
          <Link to={routeNames.home}>{headerStr.home}</Link>
        </div>
        <hr className="h-[1px] bg-muted w-full" />
        <div className="p-2 hover:bg-muted">
          <Link to={routeNames.home}>{headerStr.episode}</Link>
        </div>
        <hr className="h-[1px] bg-muted w-full" />
        <div className="p-2 hover:bg-muted">
          <Link to={routeNames.home}>{headerStr.char}</Link>
        </div>
        <hr className="h-[1px] bg-muted w-full" />
        <div className="p-2 hover:bg-muted">
          <Link to={routeNames.home}>{headerStr.location}</Link>
        </div>
        <hr className="h-[1px] bg-muted w-full" />
        <div className="p-2 hover:bg-muted">
          <Link to={routeNames.home}>{headerStr.logOut}</Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
