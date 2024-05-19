import { FC } from "react";

type Props = {
  onClickMenuItem: (path: string) => void;
  path: string;
  label: string;
  isLast?: boolean;
};

const UserMenuItem: FC<Props> = ({
  onClickMenuItem,
  label: label,
  isLast = false,
  path,
}) => {
  return (
    <>
      <div
        className="p-2 hover:bg-muted cursor-pointer"
        onClick={() => onClickMenuItem(path)}
      >
        {label}
      </div>
      {!isLast && <hr className="h-[1px] bg-muted w-full cursor-pointer" />}
    </>
  );
};

export default UserMenuItem;
