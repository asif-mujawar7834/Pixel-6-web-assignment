import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { tableHeader } from "../constants";
import {
  customerType,
  deleteCustomer,
  setSelectedCustomer,
} from "../redux/reducers/CustomerSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { FaPen, FaTrash } from "react-icons/fa";

export const Customers = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { customers } = useAppSelector((state) => state.customers);

  // Handle editing a customer
  const handleEdit = (customer: customerType) => {
    dispatch(setSelectedCustomer(customer));
    navigate(`/pixel6-assignment/customer/${customer.id}`);
  };

  // Handle deleting a customer
  const handleDelete = (id: number) => {
    dispatch(deleteCustomer({ id }));
  };

  // Render the customer table if data is present in redux state
  const renderCustomers = (
    <div className="bg-[#ffff] border border-gray-300 shadow-md p-2 rounded-md">
      <h1 className="text-lg text-black font-bold mt-3 mb-6">
        Customer Records
      </h1>
      <section className="box-border h-4/5 overflow-hidden">
        <div className="overflow-auto rounded-md">
          <table className="p-2 w-full text-sm border border-[#E2E8F0]">
            {/* table headers */}
            <thead className="bg-[#e0ebf7] text-[#363636] text-xs font-medium">
              <tr>
                {tableHeader.map((header) => (
                  <th key={header.id} className="p-3 whitespace-nowrap text-sm">
                    <div className="flex gap-2 items-center">
                      {header.icon}
                      <span>{header.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/*table body*/}
            <tbody className="font-medium">
              {/*table rows*/}
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="text-[#374151] font-medium text-sm cursor-pointer hover:bg-slate-100"
                >
                  {tableHeader.map((header) => {
                    {
                      /*render edit and delete icons if header is actions*/
                    }
                    if (header.name === "Action") {
                      return (
                        <td
                          key={header.id}
                          className="p-4 border-b border-[#E2E8F0] whitespace-nowrap flex gap-2"
                        >
                          <button
                            className="py-2 px-3 bg-green-200 text-green-600 rounded-sm"
                            onClick={() => handleEdit(customer)}
                          >
                            <FaPen />
                          </button>
                          <button
                            className="py-2 px-3 bg-red-200 text-red-700 rounded-sm"
                            onClick={() => handleDelete(customer.id as number)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      );
                    }
                    return (
                      <td
                        key={header.id}
                        className="px-4 py-3 border-b border-[#E2E8F0] whitespace-nowrap"
                      >
                        {customer[header.value as keyof customerType]
                          ? customer[header.value as keyof customerType]
                          : "--"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );

  // render simple message if data for table is not present in redux state
  const noCustomerFound = (
    <div>
      <Link to="/pixel6-assignment/add-customer">
        <h1 className="text-red-500 font-medium">
          No Customers found, Click here to add customers.
        </h1>
      </Link>
    </div>
  );

  return (
    <div className="relative">
      <Header heading="Customer List" />
      <div className="p-5 bg-[#fafafa]">
        {customers.length > 0 ? renderCustomers : noCustomerFound}
      </div>
    </div>
  );
};
