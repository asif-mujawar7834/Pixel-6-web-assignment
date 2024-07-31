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
          <Route path="/pixel6-assignment" element={<Customers />} />
          <Route
            path="/pixel6-assignment/add-customer"
            element={<AddCustomer />}
          />
          <Route
            path="/pixel6-assignment/customer/:id"
            element={<EditCustomer />}
          />
          <Route path="/pixel6-assignment/emails" element={<Emails />} />
          <Route
            path="/pixel6-assignment/notifications"
            element={<Notifications />}
          />
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
