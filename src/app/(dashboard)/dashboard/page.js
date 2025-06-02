import React from "react";
import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import SidebarFrame from "@/components/dashboard/SidebarFrame";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div className="flex">
      <SidebarFrame/>
      <div className="p-7">
        <h1 className="text-2xl">Dashboard Page</h1>
        <h2 className="text-xl">
          Welcome back, <span className="font-bold">{session?.user?.name}</span>
        </h2>
        <p>{JSON.stringify(session)}</p>
      </div>
    </div>
  );
};

export default DashboardPage;
