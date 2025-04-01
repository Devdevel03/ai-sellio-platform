import {
    Bot,
    Users,
    BarChart3,
    MessageSquare,
    Phone,
    Settings,
    LogOut,
    PlusCircle,
    Menu,
    ArrowLeft,
  } from "lucide-react";
  import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
  } from "@/components/ui/sidebar";
  import { Button } from "@/components/ui/button";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import { Link } from "react-router-dom";
  
  export function AppSidebar() {
    const menuItems = [
      {
        title: "My Agents",
        icon: Bot,
        url: "/dashboard",
        active: true,
      },
      {
        title: "Analytics",
        icon: BarChart3,
        url: "/analytics",
      },
      {
        title: "Conversations",
        icon: MessageSquare,
        url: "/conversations",
      },
      {
        title: "Voice Calls",
        icon: Phone,
        url: "/calls",
      },
      {
        title: "Customers",
        icon: Users,
        url: "/customers",
      },
      {
        title: "Settings",
        icon: Settings,
        url: "/settings",
      },
    ];
  
    return (
      <Sidebar className="bg-white border-r shadow-sm">
        <SidebarHeader className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center space-x-2">
          <span className="text-blue-600 font-bold">AI Sellio</span>

          </Link>
          <SidebarTrigger>
            <Menu className="h-5 w-5 text-gray-500" />
            <span className="sr-only">Toggle Sidebar</span>
          </SidebarTrigger>
        </SidebarHeader>
  
        <SidebarContent>
          <SidebarGroup>
            <div className="px-4 py-2">
              <Button className="w-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create New Agent
              </Button>
            </div>
  
            <SidebarGroupLabel className="px-4 pt-6 pb-2 text-xs font-semibold text-gray-500">
              MAIN MENU
            </SidebarGroupLabel>
  
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`flex items-center px-3 py-2 rounded-md hover:bg-blue-50 transition ${
                        item.active ? "bg-blue-100 text-blue-700" : "text-gray-700"
                      }`}
                    >
                      <Link to={item.url} className="flex items-center w-full">
                        <item.icon className="mr-3 h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
  
        <SidebarFooter className="p-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="" />
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-gray-900 font-medium">John Doe</p>
                <p className="text-xs text-gray-500">Pro Plan</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-700">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
  
          <div className="mt-4">
            <Link
              to="/"
              className="flex items-center text-sm text-blue-600 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </SidebarFooter>
      </Sidebar>
    );
  }
  