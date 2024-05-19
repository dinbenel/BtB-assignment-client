import { ButtonHTMLAttributes, FC } from "react";
import { Button } from "../ui/button";
import { cn } from "@/utils/style";

type Props = {
  label: string;
  onClick: () => void;
  isDisabled: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const PaginationButton: FC<Props> = ({
  label,
  onClick,
  isDisabled,
  className,
}) => {
  return (
    <Button
      className={cn("bg-transparent text-foreground hover:bg-muted", className)}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </Button>
  );
};

export default PaginationButton;
