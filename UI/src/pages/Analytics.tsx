
import React, { useState } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { AnalyticsChart } from '@/components/analytics/AnalyticsChart';
import { 
  BarChart3, 
  Users, 
  MessageCircle, 
  TrendingUp, 
  BarChart2, 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin
} from 'lucide-react';

// Mock data for different time periods
const weekData = [
  { name: 'Mon', twitter: 420, instagram: 340, facebook: 240, linkedin: 180 },
  { name: 'Tue', twitter: 380, instagram: 390, facebook: 220, linkedin: 200 },
  { name: 'Wed', twitter: 450, instagram: 480, facebook: 280, linkedin: 230 },
  { name: 'Thu', twitter: 470, instagram: 420, facebook: 310, linkedin: 245 },
  { name: 'Fri', twitter: 540, instagram: 530, facebook: 350, linkedin: 260 },
  { name: 'Sat', twitter: 580, instagram: 620, facebook: 400, linkedin: 290 },
  { name: 'Sun', twitter: 610, instagram: 590, facebook: 420, linkedin: 310 },
];

const monthData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  twitter: Math.floor(Math.random() * 500) + 300,
  instagram: Math.floor(Math.random() * 600) + 250,
  facebook: Math.floor(Math.random() * 400) + 200,
  linkedin: Math.floor(Math.random() * 300) + 150,
}));

const yearData = Array.from({ length: 12 }, (_, i) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return {
    name: months[i],
    twitter: Math.floor(Math.random() * 8000) + 4000,
    instagram: Math.floor(Math.random() * 10000) + 5000,
    facebook: Math.floor(Math.random() * 6000) + 3000,
    linkedin: Math.floor(Math.random() * 4000) + 2000,
  };
});

// Helper function to get data based on time range
const getDataByTimeRange = (range: string) => {
  switch (range) {
    case '7d':
      return weekData;
    case '30d':
      return monthData;
    case '90d':
      return monthData.slice(0, 90);
    case '1y':
      return yearData;
    default:
      return weekData;
  }
};

const Analytics = () => {
  const [engagementTimeRange, setEngagementTimeRange] = useState('7d');
  const [followersTimeRange, setFollowersTimeRange] = useState('7d');
  const [contentTimeRange, setContentTimeRange] = useState('7d');
  
  // Get the appropriate data based on the selected time range
  const engagementData = getDataByTimeRange(engagementTimeRange);
  const followersData = getDataByTimeRange(followersTimeRange);
  const contentData = getDataByTimeRange(contentTimeRange);

  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground mt-1">Track your social media performance</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <DashboardCard 
            title="Platform Overview" 
            description="Performance by platform" 
            className="lg:col-span-2"
            icon={<BarChart3 className="h-5 w-5" />}
          >
            <div className="space-y-4">
              {/* Twitter Performance */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-full">
                    <Twitter className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Twitter</p>
                    <p className="text-xs text-muted-foreground">8,241 followers</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">+12.5%</span>
                    <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                  </div>
                  <p className="text-xs text-muted-foreground">vs last month</p>
                </div>
              </div>
              
              {/* Instagram Performance */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 p-2 rounded-full">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Instagram</p>
                    <p className="text-xs text-muted-foreground">12,634 followers</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">+8.2%</span>
                    <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                  </div>
                  <p className="text-xs text-muted-foreground">vs last month</p>
                </div>
              </div>
              
              {/* Facebook Performance */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 p-2 rounded-full">
                    <Facebook className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Facebook</p>
                    <p className="text-xs text-muted-foreground">3,921 followers</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">+3.1%</span>
                    <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                  </div>
                  <p className="text-xs text-muted-foreground">vs last month</p>
                </div>
              </div>
              
              {/* LinkedIn Performance */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 p-2 rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">2,089 followers</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">+5.7%</span>
                    <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                  </div>
                  <p className="text-xs text-muted-foreground">vs last month</p>
                </div>
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard 
            title="Content Performance" 
            description="Engagement by content type" 
            className="lg:col-span-2"
            icon={<BarChart2 className="h-5 w-5" />}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 p-2 rounded-full">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Text Posts</p>
                    <p className="text-xs text-muted-foreground">48 posts</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">3.2% engagement</span>
                  </div>
                  <p className="text-xs text-muted-foreground">+0.8% vs last month</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 p-2 rounded-full">
                    <img src="/placeholder.svg" className="h-4 w-4" alt="Images" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Image Posts</p>
                    <p className="text-xs text-muted-foreground">76 posts</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">5.4% engagement</span>
                  </div>
                  <p className="text-xs text-muted-foreground">+1.2% vs last month</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 p-2 rounded-full">
                    <img src="/placeholder.svg" className="h-4 w-4" alt="Videos" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Video Posts</p>
                    <p className="text-xs text-muted-foreground">24 posts</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">7.8% engagement</span>
                  </div>
                  <p className="text-xs text-muted-foreground">+2.1% vs last month</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 p-2 rounded-full">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Poll/Interactive</p>
                    <p className="text-xs text-muted-foreground">12 posts</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">9.5% engagement</span>
                  </div>
                  <p className="text-xs text-muted-foreground">+3.2% vs last month</p>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <AnalyticsChart 
            title="Engagement Overview" 
            description="Engagement metrics across platforms" 
            data={engagementData} 
            type="line"
            timeRange={engagementTimeRange}
            onTimeRangeChange={setEngagementTimeRange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnalyticsChart 
            title="Followers Growth" 
            description="New followers over time" 
            data={followersData} 
            type="bar"
            timeRange={followersTimeRange}
            onTimeRangeChange={setFollowersTimeRange}
          />
          
          <AnalyticsChart 
            title="Content Performance" 
            description="Engagement by content type" 
            data={contentData} 
            type="bar"
            timeRange={contentTimeRange}
            onTimeRangeChange={setContentTimeRange}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Analytics;

