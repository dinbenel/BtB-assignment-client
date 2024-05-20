import { cn } from "@/utils/style";
import { FC, SVGAttributes } from "react";

type Props = {
  className?: SVGAttributes<SVGSVGElement>["className"];
  containerClassName?: SVGAttributes<SVGSVGElement>["className"];
  width?: string;
  height?: string;
};

const LoadingSpinner: FC<Props> = ({
  className,
  containerClassName,
  height = "24",
  width = "24",
}) => {
  return (
    <div className={cn("flex items-center justify-center", containerClassName)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("animate-spin text-blue-500", className)}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  );
};

export default LoadingSpinner;
