import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Building, CreditCard, Wrench, BarChart3, Shield } from "lucide-react";
import heroImage from "@/assets/Rental-aspect.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/30">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building className="h-12 w-12 text-white" />
            <h1 className="text-6xl font-bold">
              RentManager Pro
            </h1>
          </div>
          <p className="text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Streamline your rental property management with secure payments, maintenance tracking, and comprehensive reporting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              asChild
            >
              <Link to="/tenant/login">
              <Users className="h-5 w-5 mr-2" />
              Tenant Portal
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-blue-600 hover:bg-white hover:text-primary px-8 py-4 text-lg"
              asChild
            >
              <Link to="/landlord/login">
              <Building className="h-5 w-5 mr-2" />
              Landlord Portal
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              RentManager Pro
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your rental property management with secure payments, maintenance tracking, and comprehensive reporting.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <CreditCard className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Online Payments</h3>
              <p className="text-muted-foreground">Secure rent collection with automated receipts and payment tracking</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <Wrench className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Maintenance Portal</h3>
              <p className="text-muted-foreground">Submit and track maintenance requests with real-time status updates</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial Reports</h3>
              <p className="text-muted-foreground">Comprehensive income and expense tracking with detailed analytics</p>
            </CardContent>
          </Card>
        </div>

        {/* Role Selection */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Choose Your Portal</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tenant Portal */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary/50">
              <CardContent className="p-0 text-center">
                <div className="mb-6">
                  <Users className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-2">Tenant Portal</h3>
                  <p className="text-muted-foreground mb-6">
                    Pay rent, submit maintenance requests, and track your rental account
                  </p>
                </div>
                <div className="space-y-2 text-sm text-left mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Secure online rent payments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Easy maintenance request submission</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Payment history and receipts</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                  asChild
                >
                  <Link to="/tenant/login">
                  Access Tenant Portal
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Landlord Portal */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-success/50">
              <CardContent className="p-0 text-center">
                <div className="mb-6">
                  <Building className="h-16 w-16 text-success mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-2">Landlord Portal</h3>
                  <p className="text-muted-foreground mb-6">
                    Manage properties, track income, and oversee maintenance operations
                  </p>
                </div>
                <div className="space-y-2 text-sm text-left mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Income and expense tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Maintenance request management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Comprehensive financial reports</span>
                  </div>
                </div>
                <Button 
                  variant="outline"
                  className="w-full border-success text-success hover:bg-success hover:text-success-foreground"
                  asChild
                >
                  <Link to="/landlord/login">
                  Access Landlord Portal
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;