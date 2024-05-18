import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {
  label: string;
  values: string[];
  selected: string;
  onChange: (value: string) => void;
};

const FormSelectInput: FC<Props> = ({ label, values, onChange, selected }) => {
  return (
    <Select onValueChange={onChange} value={selected}>
      <SelectTrigger className="">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className="">
        {values.map((v) => (
          <SelectItem key={`${Date.now}-${v}`} value={v}>
            {v}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FormSelectInput;
