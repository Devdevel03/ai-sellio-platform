import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, BarChart, Clock, ArrowUpRight } from "lucide-react";

const conversations = [
  {
    id: 1,
    customer: "Emily Johnson",
    agent: "Sales Explorer",
    time: "12 min ago",
    duration: "8 min",
    status: "Qualified Lead",
    messages: 12,
    sentiment: "positive"
  },
  {
    id: 2,
    customer: "Michael Chang",
    agent: "Support Sage",
    time: "43 min ago",
    duration: "15 min",
    status: "Support Issue Resolved",
    messages: 24,
    sentiment: "neutral"
  },
  {
    id: 3,
    customer: "Sarah Williams",
    agent: "Product Advisor",
    time: "2 hours ago",
    duration: "6 min",
    status: "Demo Scheduled",
    messages: 9,
    sentiment: "positive"
  }
];

const sentimentColors = {
  positive: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  neutral: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  negative: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
};

export function RecentConversations() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Conversations</CardTitle>
          <CardDescription>Latest interactions with your AI agents</CardDescription>
        </div>
        <a href="/conversations" className="text-sm text-primary flex items-center">
          View all
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {conversations.map((convo) => (
            <div key={convo.id} className="flex items-start p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarFallback className="bg-primary/10 text-primary">
                  {convo.customer.split(" ").map(name => name[0]).join("")}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-sm">{convo.customer}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">with {convo.agent}</p>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {convo.time}
                  </div>
                </div>
                
                <div className="mt-2 flex flex-wrap gap-2">
                  <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${sentimentColors[convo.sentiment as keyof typeof sentimentColors]}`}>
                    {convo.status}
                  </div>
                  
                  <div className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-200">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    {convo.messages} messages
                  </div>
                  
                  <div className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-200">
                    <BarChart className="h-3 w-3 mr-1" />
                    {convo.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
