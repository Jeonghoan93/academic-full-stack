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
    <input
      data-type={dataType}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
