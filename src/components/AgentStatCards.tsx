import { PieChart, User, BarChart3, MessageSquare } from "lucide-react";

export function AgentStatCards() {
  const stats = [
    {
      title: "Total Agents",
      value: "8",
      change: "+2 this month",
      icon: <Bot className="h-5 w-5 text-purple-500" />,
      trend: "up"
    },
    {
      title: "Total Conversations",
      value: "1,248",
      change: "+24% from last month",
      icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
      trend: "up"
    },
    {
      title: "Leads Generated",
      value: "238",
      change: "+12% from last month",
      icon: <User className="h-5 w-5 text-green-500" />,
      trend: "up"
    },
    {
      title: "Conversion Rate",
      value: "18.4%",
      change: "-2% from last month",
      icon: <PieChart className="h-5 w-5 text-orange-500" />,
      trend: "down"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="flex justify-between items-center">
            <span className="stat-label">{stat.title}</span>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2">
              {stat.icon}
            </div>
          </div>
          <div className="stat-value">{stat.value}</div>
          <div className={`text-xs mt-2 flex items-center ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {stat.trend === 'up' ? 
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg> :
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            }
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
}

// Missing Bot icon import
import { Bot } from "lucide-react";
