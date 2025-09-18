import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  CreditCard, 
  Wrench, 
  DollarSign, 
  Calendar, 
  AlertCircle, 
  CheckCircle,
  Clock
} from "lucide-react";

const TenantDashboard = () => {
  const navigate = useNavigate();

  // Mock data - in real app, this would come from Supabase
  const rentStatus = {
    amount: 1250,
    dueDate: "2024-01-01",
    status: "due", // due, paid, overdue
    daysTillDue: 5
  };

  const maintenanceRequests = [
    { id: 1, title: "Leaky faucet in kitchen", status: "in-progress", date: "2023-12-15" },
    { id: 2, title: "Heating not working properly", status: "pending", date: "2023-12-20" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4 text-success" />;
      case "in-progress": return <Clock className="h-4 w-4 text-warning" />;
      case "pending": return <AlertCircle className="h-4 w-4 text-pending" />;
      default: return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-success text-success-foreground";
      case "in-progress": return "bg-warning text-warning-foreground";
      case "pending": return "bg-pending text-pending-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <p className="text-muted-foreground">Here's an overview of your rental account</p>
      </div>

      {/* Rent Status Card */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Rent Status
              </CardTitle>
              <CardDescription>
                Next payment due in {rentStatus.daysTillDue} days
              </CardDescription>
            </div>
            <Badge 
              variant={rentStatus.status === "paid" ? "default" : "destructive"}
              className="capitalize"
            >
              {rentStatus.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">${rentStatus.amount}</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Due: January 1, 2024
              </div>
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80"
              onClick={() => navigate('/tenant/payments')}
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Pay Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/tenant/maintenance')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Wrench className="h-5 w-5 text-warning" />
              Submit Maintenance Request
            </CardTitle>
            <CardDescription>
              Report any issues that need attention
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/tenant/history')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CreditCard className="h-5 w-5 text-success" />
              View Payment History
            </CardTitle>
            <CardDescription>
              Access your rent payment records and receipts
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Recent Maintenance Requests */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Maintenance Requests</CardTitle>
          <CardDescription>
            Track the status of your submitted requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {maintenanceRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {getStatusIcon(request.status)}
                  <div>
                    <div className="font-medium">{request.title}</div>
                    <div className="text-sm text-muted-foreground">
                      Submitted: {new Date(request.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <Badge className={getStatusColor(request.status)}>
                  {request.status.replace("-", " ")}
                </Badge>
              </div>
            ))}
          </div>
          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={() => navigate('/tenant/maintenance')}
          >
            View All Requests
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TenantDashboard;