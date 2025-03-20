
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Clock, 
  Calendar as CalendarIcon,
  MoreVertical
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type PlatformType = 'twitter' | 'instagram' | 'facebook' | 'linkedin';

interface ScheduledPost {
  id: string;
  platform: PlatformType;
  content: string;
  date: Date;
  time: string;
  status: 'scheduled' | 'posted' | 'failed';
}

const platformIcons = {
  twitter: <Twitter className="h-4 w-4" />,
  instagram: <Instagram className="h-4 w-4" />,
  facebook: <Facebook className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />
};

const getPlatformColors = (platform: PlatformType) => {
  switch (platform) {
    case 'twitter':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
    case 'instagram':
      return 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400';
    case 'facebook':
      return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400';
    case 'linkedin':
      return 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400';
  }
};

// Mock data for scheduled posts
const mockScheduledPosts: ScheduledPost[] = [
  {
    id: '1',
    platform: 'twitter',
    content: 'Check out our new blog post on social media strategies!',
    date: new Date(2023, 5, 15),
    time: '09:00 AM',
    status: 'scheduled'
  },
  {
    id: '2',
    platform: 'instagram',
    content: 'Behind the scenes of our latest product photoshoot',
    date: new Date(2023, 5, 15),
    time: '12:30 PM',
    status: 'scheduled'
  },
  {
    id: '3',
    platform: 'facebook',
    content: 'Join us for our upcoming webinar on digital marketing trends',
    date: new Date(2023, 5, 16),
    time: '02:00 PM',
    status: 'scheduled'
  },
  {
    id: '4',
    platform: 'linkedin',
    content: 'We\'re hiring! Check out our open positions',
    date: new Date(2023, 5, 17),
    time: '10:00 AM',
    status: 'scheduled'
  }
];

export function ScheduleCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  
  // Function to filter posts by selected date
  const getPostsForDate = (date: Date | null) => {
    if (!date) return [];
    
    return mockScheduledPosts.filter(post => {
      const postDate = new Date(post.date);
      return (
        postDate.getDate() === date.getDate() &&
        postDate.getMonth() === date.getMonth() &&
        postDate.getFullYear() === date.getFullYear()
      );
    });
  };
  
  // Posts for the selected date
  const selectedDatePosts = getPostsForDate(selectedDate);
  
  // Function to get dates with posts
  const getDatesWithPosts = () => {
    const uniqueDates = new Set();
    
    mockScheduledPosts.forEach(post => {
      const dateString = post.date.toDateString();
      uniqueDates.add(dateString);
    });
    
    return Array.from(uniqueDates).map(dateStr => new Date(dateStr as string));
  };
  
  const datesWithPosts = getDatesWithPosts();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate);
              setSelectedDate(newDate);
            }}
            className="rounded-md border"
            modifiers={{
              booked: datesWithPosts,
            }}
            modifiersStyles={{
              booked: {
                fontWeight: 'bold',
                backgroundColor: 'hsl(var(--primary) / 0.1)',
                color: 'hsl(var(--primary))',
              }
            }}
          />
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2 animate-fade-up">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            {selectedDate && (
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                <span>{selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            )}
          </CardTitle>
          <Button size="sm">+ New Post</Button>
        </CardHeader>
        <CardContent>
          {selectedDatePosts.length > 0 ? (
            <ScrollArea className="h-[300px] rounded-md">
              <div className="space-y-4">
                {selectedDatePosts.map(post => (
                  <div 
                    key={post.id} 
                    className="p-4 border rounded-lg transition-all duration-200 hover:bg-secondary/50"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-3">
                        <div className={cn("p-2 rounded-full", getPlatformColors(post.platform))}>
                          {platformIcons[post.platform]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs font-normal">
                              {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                            </Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.time}
                            </div>
                          </div>
                          <p className="text-sm line-clamp-2">
                            {post.content}
                          </p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Reschedule</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Cancel
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <div className="h-[300px] flex flex-col items-center justify-center text-center p-4">
              <CalendarIcon className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-medium">No posts scheduled</h3>
              <p className="text-muted-foreground text-sm mt-1 mb-4">
                There are no posts scheduled for this date.
              </p>
              <Button>Schedule a Post</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
