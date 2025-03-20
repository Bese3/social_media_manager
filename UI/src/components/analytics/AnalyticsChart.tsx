
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  TooltipProps
} from 'recharts';
import { cn } from '@/lib/utils';

interface AnalyticsChartProps {
  title: string;
  description?: string;
  data: any[];
  className?: string;
  type?: 'line' | 'bar';
  timeRange?: string;
  onTimeRangeChange?: (range: string) => void;
}

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-lg shadow-lg p-3 text-sm">
        <p className="font-medium">{label}</p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2 mt-1">
            <div 
              className="h-2 w-2 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="font-medium">{entry.name}: </span>
            <span>{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function AnalyticsChart({ 
  title, 
  description, 
  data, 
  className,
  type = 'line',
  timeRange = '7d',
  onTimeRangeChange
}: AnalyticsChartProps) {
  
  const handleTimeRangeChange = (value: string) => {
    if (onTimeRangeChange) {
      onTimeRangeChange(value);
    }
  };
  
  return (
    <Card className={cn("overflow-hidden animate-fade-up", className)}>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        <Select 
          defaultValue={timeRange} 
          onValueChange={handleTimeRangeChange}
        >
          <SelectTrigger className="w-[120px] h-8">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="1y">Last year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-0 pb-4">
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="grid grid-cols-5 h-8 w-[320px] mx-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="twitter">Twitter</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
            <TabsTrigger value="facebook">Facebook</TabsTrigger>
            <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                {type === 'line' ? (
                  <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis 
                      dataKey="name" 
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="twitter" 
                      stroke="#1da1f2" 
                      strokeWidth={2}
                      dot={{ r: 2 }} 
                      activeDot={{ r: 6, strokeWidth: 1 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="instagram" 
                      stroke="#e1306c" 
                      strokeWidth={2} 
                      dot={{ r: 2 }} 
                      activeDot={{ r: 6, strokeWidth: 1 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="facebook" 
                      stroke="#4267B2" 
                      strokeWidth={2} 
                      dot={{ r: 2 }} 
                      activeDot={{ r: 6, strokeWidth: 1 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="linkedin" 
                      stroke="#0077b5" 
                      strokeWidth={2} 
                      dot={{ r: 2 }} 
                      activeDot={{ r: 6, strokeWidth: 1 }}
                    />
                  </LineChart>
                ) : (
                  <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis 
                      dataKey="name" 
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="twitter" fill="#1da1f2" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="instagram" fill="#e1306c" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="facebook" fill="#4267B2" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="linkedin" fill="#0077b5" radius={[4, 4, 0, 0]} />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          {/* Individual platform tabs would follow the same pattern */}
          <TabsContent value="twitter">
            {/* Twitter-specific chart */}
          </TabsContent>
          <TabsContent value="instagram">
            {/* Instagram-specific chart */}
          </TabsContent>
          <TabsContent value="facebook">
            {/* Facebook-specific chart */}
          </TabsContent>
          <TabsContent value="linkedin">
            {/* LinkedIn-specific chart */}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
