import { MdDashboard, MdEmail, MdAddCall, MdLocationPin } from "react-icons/md";
import { FaClipboardUser, FaUser } from "react-icons/fa6";
import {
  FaAddressBook,
  FaMapMarkedAlt,
  FaCity,
  FaIdCard,
  FaEnvelope,
  FaBell,
} from "react-icons/fa";

// Sidebar menu items configuration
export const sidebarMenus = [
  {
    id: 1,
    label: "Customers", // Label for the menu item
    icon: <MdDashboard />, // Icon for the menu item
    path: "/", // Path for navigation
  },
  {
    id: 2,
    label: "Add Customers",
    icon: <FaClipboardUser />,
    path: "/add-customer",
  },
  {
    id: 3,
    label: "Emails",
    icon: <FaEnvelope />,
    path: "/emails",
  },
  {
    id: 4,
    label: "Notifications",
    icon: <FaBell />,
    path: "/notifications",
  },
];

// Default values for the customer form
export const CustomerFormDefaultValues = {
  panNumber: "",
  name: "",
  email: "",
  phone: "+91",
  address1: "",
  address2: "",
  pincode: "",
  state: "",
  city: "",
};

// table header data with icons for each header
export const tableHeader = [
  {
    id: 1,
    name: "PAN Number",
    value: "panNumber",
    icon: <FaIdCard />,
  },
  {
    id: 2,
    name: "Name",
    value: "name",
    icon: <FaUser />,
  },
  {
    id: 3,
    name: "Email",
    value: "email",
    icon: <MdEmail />,
  },
  {
    id: 4,
    name: "Phone Number",
    value: "phone",
    icon: <MdAddCall />,
  },
  {
    id: 5,
    name: "Address 1",
    value: "address1",
    icon: <FaAddressBook />,
  },
  {
    id: 6,
    name: "Address 2",
    value: "address2",
    icon: <FaAddressBook />,
  },
  {
    id: 7,
    name: "Pin code",
    value: "pincode",
    icon: <MdLocationPin />,
  },
  {
    id: 8,
    name: "State",
    value: "state",
    icon: <FaMapMarkedAlt />,
  },
  {
    id: 9,
    name: "City",
    value: "city",
    icon: <FaCity />,
  },
  {
    id: 10,
    name: "Action",
    value: "",
    icon: <FaCity />,
  },
];

//added some default values to show in the table

export const defaultCustomersList = [
  {
    id: 1,
    panNumber: "XYZAB5678C",
    name: "Rohit Sharma",
    email: "rohitsharma@gmail.com",
    phone: "+919123456789",
    address1: "Near wankhede stadium",
    address2: "Near lane",
    pincode: "400001",
    state: "Maharashtra",
    city: "Mumbai",
  },
  {
    id: 2,
    panNumber: "LMNOP1234Q",
    name: "Nikhil Patil",
    email: "nikhil@gmail.com",
    phone: "+912252388964",
    address1: "Dongrade in dhule dist.",
    address2: "",
    pincode: "121521",
    state: "Maharashtra",
    city: "Dongrade",
  },
  {
    id: 3,
    panNumber: "JKLNM3456S",
    name: "Gautam Gambhir",
    email: "gautamgambhir@gmail.com",
    phone: "+919456123456",
    address1: "Near Eden garden stadium",
    address2: "In apartment",
    pincode: "123456",
    state: "Delhi",
    city: "New Delhi",
  },
  {
    id: 4,
    panNumber: "PQRST7890U",
    name: "Yuvraj Singh",
    email: "yuvraj@gmail.com",
    phone: "+919812345678",
    address1: "Near Eden garden stadium",
    address2: "In apartment",
    pincode: "151637",
    state: "Punjab",
    city: "Chandigarh",
  },
];
