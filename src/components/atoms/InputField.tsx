interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function InputField({ label, ...props }: InputFieldProps) {
  const className = "border-solid border-orange-950 border rounded-2xl text-orange-950 text-lg p-2 my-0 w-full";
  return (
    <div className="m-4">
      <label>
        <h4>{label}</h4>
        {props.type == "textarea" ? (
          <textarea className={className} rows={4}>{props.defaultValue}</textarea>
        ) : (
          <input
            {...props}
            className={className}
          />
        )}
      </label>
    </div>
  );
}
