import { Header } from "../components/Header";
import banner from "../assets/banner3.jpg";
import { AddCustomerForms } from "../components/forms/CustomerForm";

export const EditCustomer = () => {
  return (
    <div className="relative">
      {/* Header with page title */}
      <Header heading="Edit Customer" />
      <div className="relative">
        {/* Banner image displayed on larger screens */}
        <div className="h-[300px] z-2 hidden sm:block">
          <img src={banner} alt="" className="w-full h-full" />
        </div>
        {/* Form container */}
        <div className="absolute w-full top-4 sm:top-40">
          <div className="bg-white w-[95%] mx-auto mb-8 border border-gray-300 shadow-md p-5 rounded-md">
            <AddCustomerForms />
          </div>
        </div>
      </div>
    </div>
  );
};
