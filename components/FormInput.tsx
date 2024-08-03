interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
}: FormInputProps) {
  return (
    <div>
      <input type={type} placeholder={placeholder} required={required} />
      {errors.map((error, index) => (
        <span key={index}>{error}</span>
      ))}
    </div>
  );
}
