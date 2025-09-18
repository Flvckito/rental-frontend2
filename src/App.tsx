import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Landing from "./pages/Landing";
import DashboardLayout from "./components/DashboardLayout";
import TenantDashboard from "./pages/tenant/TenantDashboard";
import LandlordDashboard from "./pages/landlord/LandlordDashboard";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tenant" element={<DashboardLayout />}>
            <Route index element={<TenantDashboard />} />
            <Route path="payments" element={<div className="p-6"><h1 className="text-2xl font-bold">Payment Portal</h1><p className="text-muted-foreground">Secure rent payment system coming soon...</p></div>} />
            <Route path="maintenance" element={<div className="p-6"><h1 className="text-2xl font-bold">Maintenance Requests</h1><p className="text-muted-foreground">Submit and track maintenance requests...</p></div>} />
            <Route path="history" element={<div className="p-6"><h1 className="text-2xl font-bold">Payment History</h1><p className="text-muted-foreground">View your payment history and receipts...</p></div>} />
          </Route>
          <Route path="/landlord" element={<DashboardLayout />}>
            <Route index element={<LandlordDashboard />} />
            <Route path="properties" element={<div className="p-6"><h1 className="text-2xl font-bold">Property Management</h1><p className="text-muted-foreground">Manage your rental properties...</p></div>} />
            <Route path="tenants" element={<div className="p-6"><h1 className="text-2xl font-bold">Tenant Management</h1><p className="text-muted-foreground">Manage tenant information...</p></div>} />
            <Route path="maintenance" element={<div className="p-6"><h1 className="text-2xl font-bold">Maintenance Management</h1><p className="text-muted-foreground">Review and manage maintenance requests...</p></div>} />
            <Route path="financials" element={<div className="p-6"><h1 className="text-2xl font-bold">Financial Overview</h1><p className="text-muted-foreground">Track income and expenses...</p></div>} />
            <Route path="reports" element={<div className="p-6"><h1 className="text-2xl font-bold">Financial Reports</h1><p className="text-muted-foreground">Generate comprehensive reports...</p></div>} />
            <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-muted-foreground">Manage your account settings...</p></div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;