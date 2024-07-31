import { Route, BrowserRouter, Routes } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { AddCustomer } from "./pages/AddCustomer";
import { Customers } from "./pages/Customers";
import { EditCustomer } from "./pages/EditCustomer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Emails } from "./pages/Emails";
import { Notifications } from "./pages/Notifications";
function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/customer/:id" element={<EditCustomer />} />
          <Route path="/emails" element={<Emails />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          className="shadow-md border border-gray-200"
        />
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
