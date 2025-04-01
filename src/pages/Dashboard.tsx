import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AgentStatCards } from "@/components/AgentStatCards";
import { AgentsList } from "@/components/AgentsList";
import { PerformanceChart } from "@/components/PerformanceChart";
import { RecentConversations } from "@/components/RecentConversations";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search, BellIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="dashboard-container">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="dashboard-header flex justify-between items-center">
            <div>
              <h1 className="dashboard-title">My Agents</h1>
              <p className="dashboard-subtitle">
                Manage and monitor your AI sales agents
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-9 bg-gray-50"
                />
              </div>

              <Button variant="outline" size="icon" className="relative">
                <BellIcon className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white">
                  3
                </span>
              </Button>

              <Button>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create Agent
              </Button>
            </div>
          </header>

          {/* Main */}
          <main className="dashboard-main">
            <AgentStatCards />

            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <PerformanceChart />
              </div>
              <div className="lg:col-span-1">
                <RecentConversations />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Your AI Agents</h2>
                <Button variant="outline" size="sm">
                  View All Agents
                </Button>
              </div>
              <AgentsList />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
