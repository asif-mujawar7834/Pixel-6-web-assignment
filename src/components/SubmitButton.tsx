import { ReactNode } from "react";

// Define the types for the component props
interface SubmitButtonProps {
  children: ReactNode; // The content to be displayed inside the button
  disabled?: boolean; // Optional flag to disable the button
  isSubmitting?: boolean; // Optional flag to indicate if the form is submitting
}

// SubmitButton component
export const SubmitButton = ({ children }: SubmitButtonProps) => {
  return (
    <button
      className="font-medium text-white p-3 rounded-md bg-black"
      type="submit"
    >
      {/* Show a loading text if the form is submitting */}
      {children}
    </button>
  );
};
