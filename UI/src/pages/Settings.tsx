import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  UserCircle, 
  KeyRound, 
  Bell, 
  Globe, 
  Shield, 
  Settings as SettingsIcon, 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin,
  CheckCircle
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle
} from '@/components/ui/card';

const Settings = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account and connections</p>
        </div>
        
        <Tabs defaultValue="profile" className="space-y-6">
          <div className="border-b">
            <TabsList className="p-0 bg-transparent h-auto border-b-0 w-full justify-start gap-4">
              <TabsTrigger 
                value="profile" 
                className="p-0 pb-2 bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger 
                value="security" 
                className="p-0 pb-2 bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none"
              >
                Security
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="p-0 pb-2 bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger 
                value="connections" 
                className="p-0 pb-2 bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none"
              >
                Connections
              </TabsTrigger>
              <TabsTrigger 
                value="privacy" 
                className="p-0 pb-2 bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none"
              >
                Privacy
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="profile">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your profile details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="john.doe@example.com" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Acme Inc." defaultValue="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" placeholder="Social media manager with 5+ years of experience" defaultValue="Social media manager with 5+ years of experience" />
                  </div>
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Profile Picture</CardTitle>
                  <CardDescription>Update your profile image</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                    <UserCircle className="h-20 w-20 text-primary" />
                  </div>
                  <Button variant="outline">Upload New Image</Button>
                  <Button variant="ghost" className="text-destructive">Remove</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="security">
            <DashboardCard 
              title="Security Settings"
              description="Manage your account security" 
              icon={<Shield className="h-5 w-5" />}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Password</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <div>
                      <Button>Update Password</Button>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-muted-foreground">Secure your account with two-factor authentication.</p>
                      <p className="text-sm text-muted-foreground mt-1">When you log in, you will be required to provide a second form of verification.</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Switch id="2fa" />
                      <Label htmlFor="2fa">Enable 2FA</Label>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">API Keys</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <p className="font-medium">Primary API Key</p>
                        <p className="text-sm text-muted-foreground mt-1">Created on May 20, 2023</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <KeyRound className="h-4 w-4 mr-2" />
                          View Key
                        </Button>
                        <Button variant="destructive" size="sm">Revoke</Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4">
                    <KeyRound className="h-4 w-4 mr-2" />
                    Generate New API Key
                  </Button>
                </div>
              </div>
            </DashboardCard>
          </TabsContent>
          
          <TabsContent value="notifications">
            <DashboardCard 
              title="Notification Preferences"
              description="Choose how and when you want to be notified" 
              icon={<Bell className="h-5 w-5" />}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Content Performance</p>
                        <p className="text-sm text-muted-foreground">Get notifications about your content performance</p>
                      </div>
                      <Switch id="emailPerformance" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">New Followers</p>
                        <p className="text-sm text-muted-foreground">Get notifications when you get new followers</p>
                      </div>
                      <Switch id="emailFollowers" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Comments & Mentions</p>
                        <p className="text-sm text-muted-foreground">Get notifications about comments and mentions</p>
                      </div>
                      <Switch id="emailComments" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Product Updates</p>
                        <p className="text-sm text-muted-foreground">Get updates about new features and improvements</p>
                      </div>
                      <Switch id="emailUpdates" />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Push Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Content Published</p>
                        <p className="text-sm text-muted-foreground">Get notified when your scheduled content is published</p>
                      </div>
                      <Switch id="pushPublished" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">High Engagement</p>
                        <p className="text-sm text-muted-foreground">Get notified when your content gets high engagement</p>
                      </div>
                      <Switch id="pushEngagement" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Weekly Report</p>
                        <p className="text-sm text-muted-foreground">Get a weekly performance summary</p>
                      </div>
                      <Switch id="pushWeekly" />
                    </div>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </TabsContent>
          
          <TabsContent value="connections">
            <DashboardCard 
              title="Social Media Connections"
              description="Manage your connected social media accounts" 
              icon={<Globe className="h-5 w-5" />}
            >
              <div className="space-y-4">
                <div className="bg-secondary/50 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-full">
                      <Twitter className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Twitter</p>
                      <p className="text-sm text-muted-foreground">@johndoe</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Connected</span>
                    <Button variant="outline" size="sm" className="ml-4">Disconnect</Button>
                  </div>
                </div>
                
                <div className="bg-secondary/50 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 p-2 rounded-full">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-sm text-muted-foreground">@johndoe</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Connected</span>
                    <Button variant="outline" size="sm" className="ml-4">Disconnect</Button>
                  </div>
                </div>
                
                <div className="bg-secondary/50 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 p-2 rounded-full">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Facebook</p>
                      <p className="text-sm text-muted-foreground">John Doe</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Connected</span>
                    <Button variant="outline" size="sm" className="ml-4">Disconnect</Button>
                  </div>
                </div>
                
                <div className="bg-secondary/50 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 p-2 rounded-full">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">John Doe</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Connected</span>
                    <Button variant="outline" size="sm" className="ml-4">Disconnect</Button>
                  </div>
                </div>
                
                <Button className="mt-2">
                  <Globe className="h-4 w-4 mr-2" />
                  Connect New Account
                </Button>
              </div>
            </DashboardCard>
          </TabsContent>
          
          <TabsContent value="privacy">
            <DashboardCard 
              title="Privacy Settings"
              description="Control your data and privacy preferences" 
              icon={<SettingsIcon className="h-5 w-5" />}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Data Collection & Usage</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Analytics Data</p>
                        <p className="text-sm text-muted-foreground">Allow us to collect analytics data to improve your experience</p>
                      </div>
                      <Switch id="analyticsData" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Usage Data</p>
                        <p className="text-sm text-muted-foreground">Allow us to collect information about how you use our service</p>
                      </div>
                      <Switch id="usageData" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Personalization</p>
                        <p className="text-sm text-muted-foreground">Allow us to personalize your experience based on your activity</p>
                      </div>
                      <Switch id="personalization" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Data Export & Deletion</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-muted-foreground">You can export all your data or request to delete your account at any time.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline">
                        Export Data
                      </Button>
                      <Button variant="destructive">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Settings;
