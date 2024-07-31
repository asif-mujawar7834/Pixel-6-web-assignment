import { useEffect } from "react";
import { UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { ZodObject, ZodRawShape, ZodString } from "zod";
import { customerType } from "../redux/reducers/CustomerSlice";

// Custom hook to validate input and call API
export const useValidateAndCallAPI = (
  body: string, // Request body to be sent to the API
  schema: ZodObject<ZodRawShape> | ZodString, // Zod schema for validation
  value: string, // Value to validate and send to API
  fieldName: string, // Field name for setting loading state
  url: string, // API URL to call
  setValue: UseFormSetValue<{
    name: string;
    email: string;
    panNumber: string;
    pincode: string;
    phone: string;
    address1: string;
    state: string;
    city: string;
    id?: number | undefined;
    address2?: string | undefined;
  }>, // Function to update form values
  setIsLoading: React.Dispatch<
    React.SetStateAction<{
      panNumber: boolean;
      pincode: boolean;
    }>
  >, // Function to update loading state values
  updateFields: string[], // Fields to be updated from API responses
  valueToExtractFromAPIResponse: string[], // Fields to extract values from API response
  trigger: UseFormTrigger<{
    panNumber: string;
    name: string;
    email: string;
    phone: string;
    address1: string;
    pincode: string;
    state: string;
    city: string;
    address2?: string | undefined;
    id?: number | undefined;
  }> //trigger function of react hook form
) => {
  useEffect(() => {
    // checking if field is valid or not
    const isPanValid = schema.safeParse(value);
    if (isPanValid.success) {
      // fetch details based on that input value like pannumber / pincode
      const getPanDetails = async () => {
        try {
          // set loading statue true
          setIsLoading((prev) => ({ ...prev, [fieldName]: true }));
          const res = await fetch(url, {
            method: "POST",
            body,
          });
          // throw error on invalid response
          if (!res.ok) {
            throw new Error("Something went wrong while fetching pan details");
          }
          const data = await res.json();
          // update fields of form like update state and city after fetching details based on pincode
          updateFields.map((field, i) => {
            setValue(
              field as keyof customerType,
              (field as keyof customerType) === "name"
                ? data[valueToExtractFromAPIResponse[i]]
                : data[field][0][valueToExtractFromAPIResponse[i]]
            );
            trigger(field as keyof customerType);
          });
        } catch (e) {
          console.error(e);
        } finally {
          //set loading status false
          setIsLoading((prev) => ({ ...prev, [fieldName]: false }));
        }
      };
      getPanDetails();
    }
  }, [value]); // invoke useEffect based on value of input
};
