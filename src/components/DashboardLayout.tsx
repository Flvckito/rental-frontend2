import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const location = useLocation();
  const userRole = location.pathname.startsWith('/tenant') ? 'tenant' : 'landlord';

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar userRole={userRole} />
        
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center px-4">
            <SidebarTrigger className="mr-2" />
            <div className="flex items-center gap-2">
              <h1 className="font-semibold capitalize">{userRole} Dashboard</h1>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 p-6 bg-muted/20">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;