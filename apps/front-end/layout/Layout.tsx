import { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./menu/Sidebar";

export const Layout = props => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className="flex flex-auto max-w-full pt-28 pr-8 pl-8 lg:pl-80">
        <div className="flex flex-auto flex-col w-full">{children}</div>
      </div>
      <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
    </>
  );
};
