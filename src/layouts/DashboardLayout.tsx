import { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}
export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-screen overflow-auto bg-[#fafafa]">
        {children}
      </div>
    </div>
  );
};
