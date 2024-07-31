import {
  FaAddressBook,
  FaMapMarkedAlt,
  FaCity,
  FaIdCard,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdEmail, MdAddCall, MdLocationPin } from "react-icons/md";
import { FormInput } from "../FormInput";
import { SubmitButton } from "../SubmitButton";
import { useForm } from "react-hook-form";
import {
  CustomerFormSchema,
  panNumberSchema,
  pincodeSchema,
} from "../../schemas/CustomerFormSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerFormDefaultValues } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addCustomer,
  setSelectedCustomer,
  updateCustomer,
} from "../../redux/reducers/CustomerSlice";
import { useEffect, useState } from "react";
import { useValidateAndCallAPI } from "../../hooks/useValidateAndCallAPI";
export const AddCustomerForms = () => {
  const { selectedCustomer } = useAppSelector((state) => state.customers);
  const [isLoading, setIsLoading] = useState({
    panNumber: false,
    pincode: false,
  });

  //react hook form setup, instead of using usestate hook, used react-hook-form

  const {
    formState: { errors, isValid, isSubmitting },
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    trigger,
  } = useForm<z.infer<typeof CustomerFormSchema>>({
    resolver: zodResolver(CustomerFormSchema),
    defaultValues: selectedCustomer ?? CustomerFormDefaultValues,
  });

  //tracking changes of panNumber and pincode as we will call api after successfull validation

  const { panNumber } = watch();
  const { pincode } = watch();

  //created custom hook for calling api on successfull validation of panNumber and pincode

  useValidateAndCallAPI(
    JSON.stringify({ panNumber: panNumber }),
    panNumberSchema,
    panNumber,
    "panNumber",
    "https://lab.pixel6.co/api/verify-pan.php",
    setValue,
    setIsLoading,
    ["name"],
    ["fullName"],
    trigger
  );

  useValidateAndCallAPI(
    JSON.stringify({ postcode: pincode }),
    pincodeSchema,
    pincode,
    "pincode",
    "https://lab.pixel6.co/api/get-postcode-details.php",
    setValue,
    setIsLoading,
    ["state", "city"],
    ["name", "name"],
    trigger
  );

  //when component will unmount we will remove selected customer data from redux, because if selectedcustomer data is in redux, then this form will work as edit form otherwise for adding customer

  useEffect(() => {
    return () => {
      dispatch(setSelectedCustomer(null));
    };
  }, []);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //submit function to handle add / edit customer details

  const onSubmit = (values: z.infer<typeof CustomerFormSchema>) => {
    try {
      if (values?.id) {
        dispatch(updateCustomer(values));
      } else {
        dispatch(addCustomer({ ...values, id: Date.now() })); // Add new customer, used id as Date.now() as we are not using any database here
      }
      navigate("/pixel6-assignment"); // Navigate after submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="font-medium text-lg mb-5">Personal Information</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        {/* PAN Number input */}
        <FormInput
          name="panNumber"
          placeholder="Enter your PAN number"
          type="text"
          label="PAN Card"
          icon={<FaIdCard />}
          error={errors.panNumber}
          register={register}
          isLoading={isLoading.panNumber}
          required={true}
        />

        {/* Full Name input */}
        <FormInput
          name="name"
          placeholder="Enter your full name"
          type="text"
          label="Full Name"
          icon={<FaUser />}
          error={errors.name}
          register={register}
          required={true}
        />

        {/* Email input */}
        <FormInput
          name="email"
          placeholder="Enter your valid email address"
          type="text"
          label="Email Address"
          icon={<MdEmail />}
          error={errors.email}
          register={register}
          required={true}
        />

        {/* Phone number input */}
        <FormInput
          name="phone"
          placeholder="Enter your full name"
          type="text"
          label="Mobile Number"
          error={errors.phone}
          icon={<MdAddCall />}
          register={register}
          required={true}
        />

        {/* Address section */}
        <section>
          <h2 className="text-lg text-[##abb8c4 ] font-medium my-4">
            Address Information
          </h2>
          <div className="flex flex-col md:flex-row gap-2">
            {/* Address line 1 input */}
            <FormInput
              name="address1"
              placeholder="Address line 1"
              type="text"
              label="Address line 1"
              error={errors.address1}
              icon={<FaAddressBook />}
              register={register}
              required={true}
            />

            {/* Address line 2 input */}
            <FormInput
              name="address2"
              placeholder="Address line 2"
              type="text"
              icon={<FaAddressBook />}
              label="Address line 2"
              error={errors.address2}
              register={register}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 mt-3">
            {/* Pincode input */}
            <FormInput
              name="pincode"
              placeholder="State"
              type="text"
              icon={<MdLocationPin />}
              label="Pin code"
              error={errors.pincode}
              register={register}
              isLoading={isLoading.pincode}
              required={true}
            />

            {/* State input */}
            <FormInput
              name="state"
              placeholder="State"
              type="text"
              icon={<FaMapMarkedAlt />}
              label="State"
              error={errors.state}
              register={register}
              required={true}
            />

            {/* City input */}
            <FormInput
              name="city"
              placeholder="City"
              type="text"
              label="City"
              icon={<FaCity />}
              error={errors.city}
              register={register}
              required={true}
            />
          </div>
        </section>
        {/* Submit button (reusable component)*/}
        <SubmitButton disabled={!isValid || isSubmitting}>
          {getValues("id") ? "Update" : "Register"}
        </SubmitButton>
      </form>
    </div>
  );
};
