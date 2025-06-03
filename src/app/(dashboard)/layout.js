import ContentFrame from "@/components/dashboard/ContentFrame";
import SidebarFrame from "@/components/dashboard/SidebarFrame";
import TopbarFrame from "@/components/dashboard/TopbarFrame";

export default function DashboardLayout({ children }) {
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
          <ContentFrame>{children}</ContentFrame>
        </div>
      </div>
    </>
  );
}
