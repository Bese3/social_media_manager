
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { AnalyticsChart } from '@/components/analytics/AnalyticsChart';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { MetricsCard } from '@/components/dashboard/MetricsCard';
import { ArrowDown, ArrowUp, Download, BarChart3, Users, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from "@/components/ui/progress";

// Mock data for the charts
const engagementData = [
  { name: 'Mon', twitter: 420, instagram: 340, facebook: 240, linkedin: 180 },
  { name: 'Tue', twitter: 380, instagram: 390, facebook: 220, linkedin: 200 },
  { name: 'Wed', twitter: 450, instagram: 480, facebook: 280, linkedin: 230 },
  { name: 'Thu', twitter: 470, instagram: 420, facebook: 310, linkedin: 245 },
  { name: 'Fri', twitter: 540, instagram: 530, facebook: 350, linkedin: 260 },
  { name: 'Sat', twitter: 580, instagram: 620, facebook: 400, linkedin: 290 },
  { name: 'Sun', twitter: 610, instagram: 590, facebook: 420, linkedin: 310 },
];

const followerGrowthData = [
  { name: 'Jan', twitter: 7200, instagram: 9100, facebook: 5600, linkedin: 3200 },
  { name: 'Feb', twitter: 7400, instagram: 9300, facebook: 5800, linkedin: 3300 },
  { name: 'Mar', twitter: 7500, instagram: 9600, facebook: 5900, linkedin: 3400 },
  { name: 'Apr', twitter: 7700, instagram: 10100, facebook: 6100, linkedin: 3600 },
  { name: 'May', twitter: 7900, instagram: 10800, facebook: 6300, linkedin: 3800 },
  { name: 'Jun', twitter: 8200, instagram: 11500, facebook: 6600, linkedin: 4000 },
  { name: 'Jul', twitter: 8500, instagram: 12200, facebook: 6900, linkedin: 4200 },
];

const reachData = [
  { name: 'Mon', twitter: 3200, instagram: 5400, facebook: 4100, linkedin: 1800 },
  { name: 'Tue', twitter: 3500, instagram: 5800, facebook: 4300, linkedin: 2100 },
  { name: 'Wed', twitter: 3800, instagram: 6200, facebook: 4800, linkedin: 2400 },
  { name: 'Thu', twitter: 4100, instagram: 5900, facebook: 5100, linkedin: 2600 },
  { name: 'Fri', twitter: 4400, instagram: 6800, facebook: 5400, linkedin: 2900 },
  { name: 'Sat', twitter: 4800, instagram: 7200, facebook: 5800, linkedin: 3200 },
  { name: 'Sun', twitter: 5200, instagram: 7600, facebook: 6200, linkedin: 3500 },
];

const AudienceSection = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Age Distribution</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>18-24</span>
                <span>32%</span>
              </div>
              <Progress value={32} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>25-34</span>
                <span>45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>35-44</span>
                <span>15%</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>45-54</span>
                <span>5%</span>
              </div>
              <Progress value={5} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>55+</span>
                <span>3%</span>
              </div>
              <Progress value={3} className="h-2" />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Gender</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Female</span>
                <span>58%</span>
              </div>
              <Progress value={58} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Male</span>
                <span>41%</span>
              </div>
              <Progress value={41} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Non-binary</span>
                <span>1%</span>
              </div>
              <Progress value={1} className="h-2" />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Top Locations</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>United States</span>
                <span>42%</span>
              </div>
              <Progress value={42} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>United Kingdom</span>
                <span>18%</span>
              </div>
              <Progress value={18} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Canada</span>
                <span>12%</span>
              </div>
              <Progress value={12} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Australia</span>
                <span>8%</span>
              </div>
              <Progress value={8} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Germany</span>
                <span>6%</span>
              </div>
              <Progress value={6} className="h-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentSection = () => {
  const topPerformingPosts = [
    {
      platform: 'instagram',
      content: 'Behind the scenes of our latest photoshoot! #fashion #behindthescenes',
      engagement: 5840,
      reach: 28400,
      change: 32,
    },
    {
      platform: 'twitter',
      content: 'Big announcement coming next week! Stay tuned for updates...',
      engagement: 3250,
      reach: 18900,
      change: 28,
    },
    {
      platform: 'facebook',
      content: 'Join us for our upcoming webinar on digital marketing trends for 2023.',
      engagement: 2180,
      reach: 15600,
      change: 18,
    },
    {
      platform: 'linkedin',
      content: 'We\'re hiring! Check out our open positions for marketing experts.',
      engagement: 1950,
      reach: 9800,
      change: 24,
    },
  ];
  
  const platformIcons = {
    twitter: <Twitter className="h-4 w-4" />,
    instagram: <Instagram className="h-4 w-4" />,
    facebook: <Facebook className="h-4 w-4" />,
    linkedin: <Linkedin className="h-4 w-4" />
  };
  
  interface PlatformIcon {
    twitter: JSX.Element;
    instagram: JSX.Element;
    facebook: JSX.Element;
    linkedin: JSX.Element;
  }
  
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Top Performing Posts</h3>
      <div className="space-y-4">
        {topPerformingPosts.map((post, index) => (
          <div key={index} className="p-4 border rounded-lg hover:bg-secondary/50 transition-all duration-200">
            <div className="flex items-start gap-3">
              <div className="bg-secondary p-2 rounded-full">
                {platformIcons[post.platform as keyof PlatformIcon]}
              </div>
              <div className="flex-1">
                <p className="text-sm line-clamp-2 mb-2">{post.content}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Engagement</p>
                    <div className="flex items-center gap-1">
                      <p className="text-sm font-medium">{post.engagement.toLocaleString()}</p>
                      <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                        <ArrowUp className="h-3 w-3" />
                        {post.change}%
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Reach</p>
                    <p className="text-sm font-medium">{post.reach.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const LinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Analytics = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground mt-1">Track and analyze your social media performance</p>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
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
            title="Total Reach" 
            value="152K" 
            change={8.2} 
            trend="up" 
            subtitle="vs last month" 
            icon={<Share2 className="h-6 w-6" />}
          />
          <MetricsCard 
            title="Click-through Rate" 
            value="2.1%" 
            change={0.3} 
            trend="down" 
            subtitle="vs last month" 
            icon={<BarChart3 className="h-6 w-6" />}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnalyticsChart 
            title="Engagement" 
            description="Engagement metrics across platforms" 
            data={engagementData} 
            type="line"
            className="lg:col-span-3"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnalyticsChart 
            title="Follower Growth" 
            description="Monthly follower growth by platform" 
            data={followerGrowthData} 
            type="line"
          />
          
          <AnalyticsChart 
            title="Reach" 
            description="Weekly reach by platform" 
            data={reachData} 
            type="bar"
          />
        </div>
        
        <DashboardCard 
          title="Detailed Analysis" 
          className="w-full"
        >
          <Tabs defaultValue="audience" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
              <TabsTrigger value="audience">Audience Insights</TabsTrigger>
              <TabsTrigger value="content">Content Performance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="audience" className="mt-0">
              <AudienceSection />
            </TabsContent>
            
            <TabsContent value="content" className="mt-0">
              <ContentSection />
            </TabsContent>
          </Tabs>
        </DashboardCard>
      </div>
    </MainLayout>
  );
};

export default Analytics;
