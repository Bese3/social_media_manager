
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { ScheduleCalendar } from '@/components/content/ScheduleCalendar';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar as CalendarIcon,
  Twitter,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

// Sample data for scheduled posts overview
const scheduledPostsData = {
  upcoming: 18,
  today: 3,
  thisWeek: 12,
  nextWeek: 6,
};

// Sample data for recent schedule activity
const recentScheduleActivity = [
  {
    id: '1',
    action: 'Post Scheduled',
    platform: 'twitter',
    time: '2 hours ago',
    content: 'Excited to announce our summer collection! #fashion #summer',
    status: 'scheduled',
  },
  {
    id: '2',
    action: 'Post Published',
    platform: 'instagram',
    time: '4 hours ago',
    content: 'Behind the scenes at our latest photoshoot!',
    status: 'published',
  },
  {
    id: '3',
    action: 'Post Failed',
    platform: 'facebook',
    time: '6 hours ago',
    content: 'Join us for our upcoming webinar on digital marketing trends',
    status: 'failed',
  },
  {
    id: '4',
    action: 'Post Rescheduled',
    platform: 'linkedin',
    time: '8 hours ago',
    content: 'We\'re hiring! Check out our open positions',
    status: 'rescheduled',
  },
];

const platformIcons = {
  twitter: <Twitter className="h-4 w-4" />,
  instagram: <Instagram className="h-4 w-4" />,
  facebook: <Facebook className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />
};

const statusBadges = {
  scheduled: <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">Scheduled</Badge>,
  published: <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">Published</Badge>,
  failed: <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800">Failed</Badge>,
  rescheduled: <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800">Rescheduled</Badge>,
};

const SchedulePosts = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Schedule Posts</h1>
          <p className="text-muted-foreground mt-1">Plan and organize your social media content</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-card rounded-lg p-4 border shadow-sm transition-all duration-300 hover-lift">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Upcoming Posts</p>
                <p className="text-3xl font-bold mt-2">{scheduledPostsData.upcoming}</p>
              </div>
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                <CalendarIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-4 border shadow-sm transition-all duration-300 hover-lift">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today</p>
                <p className="text-3xl font-bold mt-2">{scheduledPostsData.today}</p>
              </div>
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-4 border shadow-sm transition-all duration-300 hover-lift">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Week</p>
                <p className="text-3xl font-bold mt-2">{scheduledPostsData.thisWeek}</p>
              </div>
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-4 border shadow-sm transition-all duration-300 hover-lift">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Next Week</p>
                <p className="text-3xl font-bold mt-2">{scheduledPostsData.nextWeek}</p>
              </div>
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                <AlertTriangle className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ScheduleCalendar />
          </div>
          
          <DashboardCard 
            title="Recent Schedule Activity" 
            description="Latest scheduling actions" 
            className="lg:col-span-1"
          >
            <ScrollArea className="h-[350px] pr-4">
              <div className="space-y-4">
                {recentScheduleActivity.map((activity) => (
                  <div 
                    key={activity.id} 
                    className="p-3 border rounded-lg transition-all duration-200 hover:bg-secondary/50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary text-foreground p-2 rounded-full">
                        {platformIcons[activity.platform as keyof typeof platformIcons]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                          {activity.content}
                        </p>
                        <div className="mt-2">
                          {statusBadges[activity.status as keyof typeof statusBadges]}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </DashboardCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default SchedulePosts;
