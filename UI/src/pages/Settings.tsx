
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  Settings as SettingsIcon, 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Bell, 
  Lock, 
  Users,
  Clock,
  Globe
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Twitter SVG icon
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

// Facebook SVG icon
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

// Instagram SVG icon
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// LinkedIn SVG icon
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const ProfileSection = () => {
  const { toast } = useToast();
  
  const handleSaveProfile = () => {
    toast({
      title: "Profile saved",
      description: "Your profile information has been updated.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Jane Smith" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue="jane.smith@example.com" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" defaultValue="Acme Inc." />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea 
            id="bio" 
            defaultValue="Social media manager with 5+ years of experience in digital marketing and content creation."
            className="min-h-[100px]" 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Select defaultValue="america-new_york">
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="america-new_york">America/New York (UTC-5)</SelectItem>
              <SelectItem value="america-los_angeles">America/Los Angeles (UTC-8)</SelectItem>
              <SelectItem value="europe-london">Europe/London (UTC+0)</SelectItem>
              <SelectItem value="europe-paris">Europe/Paris (UTC+1)</SelectItem>
              <SelectItem value="asia-tokyo">Asia/Tokyo (UTC+9)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button onClick={handleSaveProfile}>Save Profile</Button>
      </div>
    </div>
  );
};

const ConnectedAccountsSection = () => {
  const { toast } = useToast();
  
  const handleConnect = (platform: string) => {
    toast({
      title: `Connect ${platform}`,
      description: "This would redirect to the OAuth flow for the platform.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              <TwitterIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Twitter</p>
              <p className="text-sm text-muted-foreground">@janesmith</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => handleConnect('Twitter')}>Reconnect</Button>
        </div>
        
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
              <InstagramIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Instagram</p>
              <p className="text-sm text-muted-foreground">@janesmith</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => handleConnect('Instagram')}>Reconnect</Button>
        </div>
        
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              <FacebookIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Facebook</p>
              <p className="text-sm text-muted-foreground">Jane Smith</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => handleConnect('Facebook')}>Reconnect</Button>
        </div>
        
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
              <LinkedInIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm text-muted-foreground">Not connected</p>
            </div>
          </div>
          <Button size="sm" onClick={() => handleConnect('LinkedIn')}>Connect</Button>
        </div>
      </div>
    </div>
  );
};

const NotificationsSection = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Email Notifications</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Post Published</p>
              <p className="text-sm text-muted-foreground">Receive notifications when a scheduled post is published</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Post Failed</p>
              <p className="text-sm text-muted-foreground">Receive notifications when a scheduled post fails to publish</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Engagement Reports</p>
              <p className="text-sm text-muted-foreground">Receive weekly engagement reports</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">New Comments</p>
              <p className="text-sm text-muted-foreground">Receive notifications about new comments on your posts</p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">In-App Notifications</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Engagement Alerts</p>
              <p className="text-sm text-muted-foreground">Receive alerts for significant engagement changes</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Mention Alerts</p>
              <p className="text-sm text-muted-foreground">Receive alerts when your brand is mentioned</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">System Notifications</p>
              <p className="text-sm text-muted-foreground">Receive notifications about system updates and new features</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
};

const AISettingsSection = () => {
  const { toast } = useToast();
  
  const handleSaveAISettings = () => {
    toast({
      title: "AI settings saved",
      description: "Your AI configuration has been updated.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Content Generation</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Use AI for Content Generation</p>
              <p className="text-sm text-muted-foreground">Enable AI to automatically generate post content</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <Label htmlFor="ai-model">AI Model</Label>
            <Select defaultValue="gpt-4">
              <SelectTrigger id="ai-model">
                <SelectValue placeholder="Select AI model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4">GPT-4 (High Quality)</SelectItem>
                <SelectItem value="gpt-3.5">GPT-3.5 (Standard)</SelectItem>
                <SelectItem value="custom">Custom Model</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content-tone">Content Tone</Label>
            <Select defaultValue="professional">
              <SelectTrigger id="content-tone">
                <SelectValue placeholder="Select content tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="friendly">Friendly</SelectItem>
                <SelectItem value="humorous">Humorous</SelectItem>
                <SelectItem value="formal">Formal</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="brand-voice">Brand Voice</Label>
            <Textarea 
              id="brand-voice" 
              placeholder="Describe your brand's voice and style..."
              className="min-h-[100px]" 
              defaultValue="Professional yet approachable. Uses industry expertise while remaining conversational. Avoids jargon and focuses on providing value to the audience."
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Engagement</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Auto-Response to Comments</p>
              <p className="text-sm text-muted-foreground">Use AI to automatically respond to common comments</p>
            </div>
            <Switch />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Sentiment Analysis</p>
              <p className="text-sm text-muted-foreground">Analyze the sentiment of comments and mentions</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Engagement Optimization</p>
              <p className="text-sm text-muted-foreground">Use AI to determine optimal posting times</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
      
      <Button onClick={handleSaveAISettings}>Save AI Settings</Button>
    </div>
  );
};

const TabsItems = [
  { id: 'profile', label: 'Profile', icon: Users },
  { id: 'accounts', label: 'Connected Accounts', icon: Globe },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'ai', label: 'AI Settings', icon: SettingsIcon },
];

const Settings = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account preferences</p>
        </div>
        
        <DashboardCard className="w-full">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid grid-cols-4 gap-4 w-full max-w-3xl mb-6">
              {TabsItems.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="profile" className="mt-0">
              <ProfileSection />
            </TabsContent>
            
            <TabsContent value="accounts" className="mt-0">
              <ConnectedAccountsSection />
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-0">
              <NotificationsSection />
            </TabsContent>
            
            <TabsContent value="ai" className="mt-0">
              <AISettingsSection />
            </TabsContent>
          </Tabs>
        </DashboardCard>
      </div>
    </MainLayout>
  );
};

export default Settings;
