import React from "react";
import { auth } from "@/auth";
import Navbar from "@/components/Navbar";

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div className="max-w-screen-xl mx-auto py-6 p-4">
      <h1 className="text-2xl">Dashboard Page</h1>
      <h2 className="text-xl">
        Welcome back, <span className="font-bold">{session?.user?.name}</span>
      </h2>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default DashboardPage;
