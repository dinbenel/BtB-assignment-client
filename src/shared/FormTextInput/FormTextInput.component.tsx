import { InputHTMLAttributes, forwardRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/utils/style";

type Props = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormTextInput = forwardRef<HTMLInputElement, Props>(
  ({ label, error, name, className, ...props }, ref) => {
    return (
      <div className="grid gap-2">
        <Label htmlFor={name}>{label}</Label>
        <Input
          id={name}
          name={name}
          ref={ref}
          className={cn(className, error ? "ring-red-500 ring-1" : "")}
          {...props}
        />
        <p className="text-red-500">{error}</p>
      </div>
    );
  }
);

export default FormTextInput;
