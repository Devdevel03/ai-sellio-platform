import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Jan', conversations: 65, leads: 28, conversions: 15 },
  { name: 'Feb', conversations: 78, leads: 35, conversions: 18 },
  { name: 'Mar', conversations: 90, leads: 40, conversions: 22 },
  { name: 'Apr', conversations: 120, leads: 60, conversions: 28 },
  { name: 'May', conversations: 150, leads: 70, conversions: 35 },
  { name: 'Jun', conversations: 180, leads: 90, conversions: 42 },
  { name: 'Jul', conversations: 210, leads: 105, conversions: 56 },
];

export function PerformanceChart() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Agent Performance</CardTitle>
        <CardDescription>Conversations, leads generated, and conversions over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: 'none',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="conversations"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="leads"
                stroke="#4ade80"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="conversions"
                stroke="#f97316"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
