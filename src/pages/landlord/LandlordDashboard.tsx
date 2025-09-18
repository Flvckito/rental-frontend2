import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Wrench, 
  Building, 
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

const LandlordDashboard = () => {
  const navigate = useNavigate();

  // Mock data - in real app, this would come from Supabase
  const monthlyStats = {
    totalIncome: 12500,
    totalExpenses: 3200,
    netIncome: 9300,
    occupancyRate: 95
  };

  const pendingMaintenance = [
    { id: 1, property: "123 Oak Street", issue: "Heating repair", tenant: "John Doe", priority: "high" },
    { id: 2, property: "456 Pine Avenue", issue: "Leaky faucet", tenant: "Jane Smith", priority: "medium" },
    { id: 3, property: "789 Elm Drive", issue: "Light fixture", tenant: "Mike Johnson", priority: "low" },
  ];

  const upcomingRent = [
    { tenant: "John Doe", amount: 1250, dueDate: "2024-01-01", status: "paid" },
    { tenant: "Jane Smith", amount: 1400, dueDate: "2024-01-01", status: "pending" },
    { tenant: "Mike Johnson", amount: 1150, dueDate: "2024-01-01", status: "overdue" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-warning text-warning-foreground";
      case "low": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPaymentStatusIcon = (status: string) => {
    switch (status) {
      case "paid": return <CheckCircle className="h-4 w-4 text-success" />;
      case "pending": return <Clock className="h-4 w-4 text-warning" />;
      case "overdue": return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default: return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Property Management Dashboard</h1>
        <p className="text-muted-foreground">Overview of your rental properties and financials</p>
      </div>

      {/* Financial Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-success" />
              Monthly Income
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">${monthlyStats.totalIncome.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">+12% from last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-destructive" />
              Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${monthlyStats.totalExpenses.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">-5% from last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Building className="h-4 w-4 text-primary" />
              Net Income
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">${monthlyStats.netIncome.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">+15% from last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-success" />
              Occupancy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{monthlyStats.occupancyRate}%</div>
            <div className="text-sm text-muted-foreground">19 of 20 units</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/landlord/properties')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Building className="h-5 w-5 text-primary" />
              Manage Properties
            </CardTitle>
            <CardDescription>
              View and manage your rental properties
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/landlord/tenants')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="h-5 w-5 text-success" />
              Tenant Management
            </CardTitle>
            <CardDescription>
              Manage tenant information and communications
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/landlord/reports')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
              Financial Reports
            </CardTitle>
            <CardDescription>
              Generate comprehensive financial reports
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Pending Maintenance Requests */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Pending Maintenance Requests</CardTitle>
              <CardDescription>
                Issues requiring your attention
              </CardDescription>
            </div>
            <Button onClick={() => navigate('/landlord/maintenance')}>
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingMaintenance.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{request.issue}</div>
                    <div className="text-sm text-muted-foreground">
                      {request.property} • {request.tenant}
                    </div>
                  </div>
                </div>
                <Badge className={getPriorityColor(request.priority)}>
                  {request.priority} priority
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Rent Payments */}
      <Card>
        <CardHeader>
          <CardTitle>January Rent Status</CardTitle>
          <CardDescription>
            Track rent collection for this month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingRent.map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {getPaymentStatusIcon(payment.status)}
                  <div>
                    <div className="font-medium">{payment.tenant}</div>
                    <div className="text-sm text-muted-foreground">
                      Due: {new Date(payment.dueDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${payment.amount}</div>
                  <Badge 
                    variant={payment.status === "paid" ? "default" : payment.status === "overdue" ? "destructive" : "secondary"}
                    className="text-xs"
                  >
                    {payment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandlordDashboard;