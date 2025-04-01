import { Bot, MoreVertical, Activity, Calendar, Languages, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

// Sample agent data
const agents = [
  {
    id: 1,
    name: "Sales Explorer",
    description: "Lead qualification and product demos",
    status: "active",
    languages: ["English", "Spanish"],
    lastUpdated: "2 days ago",
    conversationCount: 452,
    conversionRate: 22,
    avatar: "purple"
  },
  {
    id: 2,
    name: "Support Sage",
    description: "Handles common support questions",
    status: "active",
    languages: ["English", "French", "German"],
    lastUpdated: "1 week ago",
    conversationCount: 367,
    conversionRate: 18,
    avatar: "blue"
  },
  {
    id: 3,
    name: "Product Advisor",
    description: "Helps customers find the right product",
    status: "training",
    languages: ["English"],
    lastUpdated: "3 hours ago",
    conversationCount: 124,
    conversionRate: 15,
    avatar: "green"
  },
  {
    id: 4,
    name: "Onboarding Assistant",
    description: "Customer onboarding and setup",
    status: "inactive",
    languages: ["English", "Japanese"],
    lastUpdated: "2 months ago",
    conversationCount: 305,
    conversionRate: 28,
    avatar: "orange"
  }
];

const statusColors = {
  active: "bg-green-500",
  training: "bg-amber-500",
  inactive: "bg-gray-400"
};

const avatarColors = {
  purple: "bg-purple-100 text-purple-600",
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  orange: "bg-orange-100 text-orange-600"
};

export function AgentsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {agents.map((agent) => (
        <div key={agent.id} className="agent-card group">
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${avatarColors[agent.avatar as keyof typeof avatarColors]}`}>
                <Bot className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                  {agent.name}
                  <div className={`w-2 h-2 rounded-full ml-2 ${statusColors[agent.status as keyof typeof statusColors]}`}></div>
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{agent.description}</p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Edit agent</DropdownMenuItem>
                <DropdownMenuItem>View analytics</DropdownMenuItem>
                <DropdownMenuItem>View conversations</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center">
              <div className="bg-gray-100 dark:bg-gray-700 p-1.5 rounded-full mr-2">
                <MessageSquare className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <div className="text-sm font-medium">{agent.conversationCount}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Conversations</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-100 dark:bg-gray-700 p-1.5 rounded-full mr-2">
                <Activity className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <div className="text-sm font-medium">{agent.conversionRate}%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Conversion</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {agent.languages.map((lang, index) => (
              <Badge key={index} variant="outline" className="bg-gray-50 dark:bg-gray-800 text-xs px-2 py-0.5 flex items-center">
                <Languages className="h-3 w-3 mr-1" />
                {lang}
              </Badge>
            ))}
          </div>
          
          <div className="mt-auto">
            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-1.5">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                Updated {agent.lastUpdated}
              </div>
              <div>
                {agent.status === 'training' ? 'Training: 65%' : ''}
              </div>
            </div>
            
            {agent.status === 'training' && (
              <Progress value={65} className="h-1" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}