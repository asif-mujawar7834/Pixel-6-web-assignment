import { ReactNode } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { Loader } from "./Loader";

//defined prop types using typescript interface

interface FormInputProps {
  name: string; // name of the input field
  placeholder: string; // placeholder of the input field
  label?: string; // label if passed as an props otherwise optional
  type: string; // type of field eg. text / number
  error?: FieldError | undefined; // error info
  icon?: ReactNode; // icon to show in the left side of input field
  register: UseFormRegister<any>; // register method of react hook form
  isLoading?: boolean; // loading state, to show loading animation while verifying pancard / pincode
  required?: boolean; // required boolean value
}

export const FormInput = ({
  name,
  placeholder,
  label,
  type,
  error,
  icon,
  register,
  isLoading,
  required,
}: FormInputProps) => {
  return (
    <div className="flex flex-col flex-1 gap-1">
      {/* Conditionally render the label and required indicator */}
      {label && (
        <div className="flex gap-1 items-center">
          <label className="text-md text-slate-500 font-medium">{label}</label>
          {required && <span className="text-red-500">*</span>}
        </div>
      )}

      <div
        className={`flex gap-x-2 items-center border ${
          error ? "border-red-500" : "border-gray-200"
        } px-3 rounded-md font-medium text-[#081225] bg-[#f5f5f5]`}
      >
        {/* Conditionally render the icon */}
        {icon}
        <input
          className={`w-full p-2 rounded-md placeholder:text-slate-500 outline-0 bg-transparent`}
          placeholder={placeholder}
          type={type}
          {...register(name)}
          disabled={isLoading}
        />
        {/* Conditionally render the loader */}
        {isLoading && <Loader />}
      </div>
      {/* Conditionally render the error message */}
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};
