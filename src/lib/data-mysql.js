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
    const [menus, articles, images, partner] = await Promise.all([
      jagoanMysql.mitra_menus
        .groupBy({
          by: ["is_active"],
          _count: {
            _all: true,
          },
        })
        .then((data) =>
          data.map((item) => ({
            is_active: item.is_active,
            total: item._count._all,
          }))
        ),
      jagoanMysql.articles.count(),
      jagoanMysql.google_mitra_images.count(),
      jagoanMysql.partners.count(),
    ]);

    return {
      menus: {
        name: "Menu",
        data: menus,
      },
      articles: {
        name: "Article",
        total: articles,
      },
      portofolio: {
        name: "images",
        total: images,
      },
      partner: {
        name: "Partner",
        total: partner,
      },
    };
  } catch (error) {
    console.error("Error in getDataTotal:", error);

    // Return fallback default to avoid destructuring error
    return {
      menus: {
        name: "Menu",
        data: [],
      },
      articles: {
        name: "Article",
        total: 0,
      },
      portofolio: {
        name: "images",
        total: 0,
      },
      partner: {
        name: "Partner",
        total: 0,
      },
    };
  }
};
