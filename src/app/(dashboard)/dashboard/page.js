import React from "react";
import { auth } from "@/auth";
import Dashboard from "@/components/dashboard/pages/DashboardPage";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <>
    <Dashboard/>
    </>
  );
};

export default DashboardPage;
