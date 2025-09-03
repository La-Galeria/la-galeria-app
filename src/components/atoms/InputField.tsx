interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function InputField({ label, ...props }: InputFieldProps) {
  return (
    <div className="w-full">
      <label>
        <h4>{label}</h4>
        {props.type == "textarea" ? (
          <textarea rows={4} name={props.name}>
            {props.defaultValue}
          </textarea>
        ) : (
          <input {...props} />
        )}
      </label>
    </div>
  );
}
