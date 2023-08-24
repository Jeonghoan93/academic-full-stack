import { StyledInput } from "../styles";

export const Input = ({
  value,
  placeholder,
  dataType,
  onChange,
}: {
  value: string;
  placeholder: string;
  dataType: string;
  onChange: (value: string) => void;
}) => {
  return (
    <StyledInput
      data-type={dataType}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
