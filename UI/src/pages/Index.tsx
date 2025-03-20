
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { MetricsCard } from '@/components/dashboard/MetricsCard';
import { BarChart3, MessageCircle, Users, Clock, Calendar, BarChart2, Zap, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnalyticsChart } from '@/components/analytics/AnalyticsChart';

// Mock data for the chart
const engagementData = [
  { name: 'Mon', twitter: 420, instagram: 340, facebook: 240, linkedin: 180 },
  { name: 'Tue', twitter: 380, instagram: 390, facebook: 220, linkedin: 200 },
  { name: 'Wed', twitter: 450, instagram: 480, facebook: 280, linkedin: 230 },
  { name: 'Thu', twitter: 470, instagram: 420, facebook: 310, linkedin: 245 },
  { name: 'Fri', twitter: 540, instagram: 530, facebook: 350, linkedin: 260 },
  { name: 'Sat', twitter: 580, instagram: 620, facebook: 400, linkedin: 290 },
  { name: 'Sun', twitter: 610, instagram: 590, facebook: 420, linkedin: 310 },
];

const Index = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Overview of your social media performance</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              June 15, 2023
            </Button>
            <Button>
              <PenTool className="h-4 w-4 mr-2" />
              Create Content
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricsCard 
            title="Total Followers" 
            value="24,892" 
            change={12.5} 
            trend="up" 
            subtitle="vs last month" 
            icon={<Users className="h-6 w-6" />}
          />
          <MetricsCard 
            title="Engagement Rate" 
            value="3.8%" 
            change={0.6} 
            trend="up" 
            subtitle="vs last month" 
            icon={<MessageCircle className="h-6 w-6" />}
          />
          <MetricsCard 
            title="Content Published" 
            value="128" 
            change={5} 
            trend="down" 
            subtitle="vs last month" 
            icon={<PenTool className="h-6 w-6" />}
          />
          <MetricsCard 
            title="Scheduled Posts" 
            value="18" 
            subtitle="Next 7 days" 
            icon={<Clock className="h-6 w-6" />}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AnalyticsChart 
              title="Engagement Overview" 
              description="Engagement metrics across platforms" 
              data={engagementData} 
              type="line"
            />
          </div>
          
          <DashboardCard 
            title="Quick Actions" 
            className="lg:col-span-1"
            icon={<Zap className="h-5 w-5" />}
          >
            <div className="space-y-3">
              <div className="bg-secondary/80 rounded-md p-4 flex items-center gap-4 hover:bg-secondary transition-all">
                <div className="bg-primary/20 text-primary p-2 rounded-full">
                  <PenTool className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Create Content</h3>
                  <p className="text-sm text-muted-foreground">Generate new posts with AI</p>
                </div>
              </div>
              
              <div className="bg-secondary/80 rounded-md p-4 flex items-center gap-4 hover:bg-secondary transition-all">
                <div className="bg-primary/20 text-primary p-2 rounded-full">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Schedule Posts</h3>
                  <p className="text-sm text-muted-foreground">Plan your upcoming content</p>
                </div>
              </div>
              
              <div className="bg-secondary/80 rounded-md p-4 flex items-center gap-4 hover:bg-secondary transition-all">
                <div className="bg-primary/20 text-primary p-2 rounded-full">
                  <BarChart2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">View Analytics</h3>
                  <p className="text-sm text-muted-foreground">Check your performance</p>
                </div>
              </div>
              
              <div className="bg-secondary/80 rounded-md p-4 flex items-center gap-4 hover:bg-secondary transition-all">
                <div className="bg-primary/20 text-primary p-2 rounded-full">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Manage Responses</h3>
                  <p className="text-sm text-muted-foreground">Review and reply to comments</p>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <DashboardCard 
            title="Platform Performance" 
            description="Overview by platform" 
            className="lg:col-span-2"
            icon={<BarChart3 className="h-5 w-5" />}
          >
            <div className="space-y-4">
              {/* Twitter Performance */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-full">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Twitter</p>
                    <p className="text-xs text-muted-foreground">8,241 followers</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">+12.5%</span>
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground">vs last month</p>
                </div>
              </div>
              
              {/* Instagram Performance */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 p-2 rounded-full">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Instagram</p>
                    <p className="text-xs text-muted-foreground">12,634 followers</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">+8.2%</span>
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground">vs last month</p>
                </div>
              </div>
              
              {/* Facebook Performance */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 p-2 rounded-full">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Facebook</p>
                    <p className="text-xs text-muted-foreground">3,921 followers</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">+3.1%</span>
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground">vs last month</p>
                </div>
              </div>
              
              {/* LinkedIn Performance */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 p-2 rounded-full">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">2,089 followers</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">+5.7%</span>
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground">vs last month</p>
                </div>
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard 
            title="Recent Activity" 
            description="Latest content and engagement" 
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3 pb-4 border-b">
                <div className="h-9 w-9 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">New post published</p>
                    <p className="text-xs text-muted-foreground">2h ago</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    "Behind the scenes at our summer photoshoot! 📸 #BrandName #SummerCollection"
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <p className="text-xs text-muted-foreground">432 likes</p>
                    <p className="text-xs text-muted-foreground">28 comments</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 pb-4 border-b">
                <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Twitter follower milestone</p>
                    <p className="text-xs text-muted-foreground">4h ago</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Reached 8,000 followers on Twitter! 🎉
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Facebook comment</p>
                    <p className="text-xs text-muted-foreground">6h ago</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Jane Smith: "Love the new products! When will they be available in stores?"
                  </p>
                  <div className="mt-2">
                    <p className="text-xs text-primary cursor-pointer">Reply to comment</p>
                  </div>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
