import { jagoanMysql } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const getMenus = async () => {
  const session = await auth();

  if (!session || !session.user || !session.user.role === "admin") {
    redirect("/dashboard");
  }

  try {
    const menus = await jagoanMysql.mitra_menus.findMany();
    return menus;
  } catch (error) {
    console.log(error);
  }
};

export const getContentList = async () => {
  const session = await auth();

  if (!session || !session.user || !session.user.role === "admin") {
    redirect("/dashboard");
  }

  try {
    const list_content = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_URL}/api/content`); 
    return list_content.json();
  } catch (error) {
    console.log(error);
  }
};

export const getDataTotal = async () => {
  const session = await auth();

  if (!session || !session.user || !session.user.role === "admin") {
    redirect("/dashboard");
  }

  try {
    const list_content = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_URL}/api/resume`); 
    return list_content.json();
  } catch (error) {
    console.error("Error in getDataTotal:", error);
  }
};
