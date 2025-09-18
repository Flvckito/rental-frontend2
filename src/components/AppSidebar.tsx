import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  CreditCard, 
  Wrench, 
  FileText, 
  Building, 
  Users, 
  BarChart3, 
  Settings,
  DollarSign 
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  userRole: 'tenant' | 'landlord';
}

const tenantItems = [
  { title: "Dashboard", url: "/tenant", icon: Home },
  { title: "Pay Rent", url: "/tenant/payments", icon: CreditCard },
  { title: "Maintenance", url: "/tenant/maintenance", icon: Wrench },
  { title: "Payment History", url: "/tenant/history", icon: FileText },
];

const landlordItems = [
  { title: "Dashboard", url: "/landlord", icon: Home },
  { title: "Properties", url: "/landlord/properties", icon: Building },
  { title: "Tenants", url: "/landlord/tenants", icon: Users },
  { title: "Maintenance", url: "/landlord/maintenance", icon: Wrench },
  { title: "Financials", url: "/landlord/financials", icon: DollarSign },
  { title: "Reports", url: "/landlord/reports", icon: BarChart3 },
  { title: "Settings", url: "/landlord/settings", icon: Settings },
];

export function AppSidebar({ userRole }: AppSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const items = userRole === 'tenant' ? tenantItems : landlordItems;
  const isActive = (path: string) => {
    if (path === `/${userRole}`) {
      return currentPath === path;
    }
    return currentPath.startsWith(path);
  };

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
      isActive 
        ? "bg-primary text-primary-foreground font-medium" 
        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
    }`;

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarContent>
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-primary" />
            <div>
              <h2 className="font-semibold text-sm">RentManager</h2>
              <p className="text-xs text-muted-foreground capitalize">{userRole} Portal</p>
            </div>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink to={item.url} end={item.url === `/${userRole}`}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t">
          <SidebarMenuButton asChild>
            <NavLink to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </NavLink>
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}