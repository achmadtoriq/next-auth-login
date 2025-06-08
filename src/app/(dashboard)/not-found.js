import ContentFrame from "@/components/dashboard/ContentFrame";
import SidebarFrame from "@/components/dashboard/SidebarFrame";
import TopbarFrame from "@/components/dashboard/TopbarFrame";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-svh">
        {/* Sidebar fixed */}
        <SidebarFrame />

        {/* Main content wrapper (has left margin same as sidebar width) */}
        <div className="w-full flex-1 flex flex-col min-h-svh">
          {/* Topbar fixed */}
          <TopbarFrame />

          {/* Scrollable content area */}
          <ContentFrame>
            <div className="flex flex-1 flex-col justify-center items-center">
              <h2>Not Found</h2>
              <p>Could not find requested resource</p>
              <Link href="/dashboard">Return Home</Link>
            </div>
          </ContentFrame>
        </div>
      </div>
    </>
  );
}
