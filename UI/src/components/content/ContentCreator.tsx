
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Instagram, Twitter, Facebook, Linkedin, Send, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Platform = 'twitter' | 'instagram' | 'facebook' | 'linkedin';

interface ContentFormProps {
  platform: Platform;
}

const platformConfig = {
  twitter: {
    icon: Twitter,
    label: 'Twitter',
    maxChars: 280,
    maxImages: 4,
  },
  instagram: {
    icon: Instagram,
    label: 'Instagram',
    maxChars: 2200,
    maxImages: 10, // Carousel
  },
  facebook: {
    icon: Facebook,
    label: 'Facebook',
    maxChars: 5000,
    maxImages: 10,
  },
  linkedin: {
    icon: Linkedin,
    label: 'LinkedIn',
    maxChars: 3000,
    maxImages: 9,
  }
};

const ContentForm = ({ platform }: ContentFormProps) => {
  const [content, setContent] = useState('');
  const { toast } = useToast();
  const config = platformConfig[platform];
  
  const handleGenerate = () => {
    toast({
      title: "AI is generating content",
      description: "This would connect to an AI service to generate content.",
    });
  };
  
  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary p-2 rounded-full">
          <config.icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-medium">{config.label} Post</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor={`${platform}-content`}>Content</Label>
          <div className="mt-1 relative">
            <Textarea
              id={`${platform}-content`}
              placeholder={`Write your ${config.label} post here...`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[150px] resize-none"
            />
            <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
              {content.length}/{config.maxChars}
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor={`${platform}-media`}>Media</Label>
          <div className="mt-1 border-2 border-dashed rounded-lg p-6 text-center">
            <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">
              Drag and drop or click to upload
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Up to {config.maxImages} images
            </p>
            <Input
              id={`${platform}-media`}
              type="file"
              className="hidden"
              accept="image/*"
              multiple
            />
            <Button variant="outline" size="sm" className="mt-4">
              Upload Media
            </Button>
          </div>
        </div>
        
        <div>
          <Label htmlFor="hashtags">Hashtags</Label>
          <div className="flex gap-2">
            <Input 
              id="hashtags" 
              placeholder="Add hashtags..." 
              className="flex-1"
            />
            <Button variant="outline" onClick={handleGenerate}>
              Generate
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Post now" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="now">Post now</SelectItem>
              <SelectItem value="schedule">Schedule for later</SelectItem>
              <SelectItem value="draft">Save as draft</SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="gap-2">
            <Send className="h-4 w-4" />
            Create Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export function ContentCreator() {
  return (
    <Card className="w-full animate-scale-in">
      <CardContent className="p-6">
        <Tabs defaultValue="twitter" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="twitter">
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </TabsTrigger>
            <TabsTrigger value="instagram">
              <Instagram className="h-4 w-4 mr-2" />
              Instagram
            </TabsTrigger>
            <TabsTrigger value="facebook">
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </TabsTrigger>
            <TabsTrigger value="linkedin">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="twitter">
            <ContentForm platform="twitter" />
          </TabsContent>
          
          <TabsContent value="instagram">
            <ContentForm platform="instagram" />
          </TabsContent>
          
          <TabsContent value="facebook">
            <ContentForm platform="facebook" />
          </TabsContent>
          
          <TabsContent value="linkedin">
            <ContentForm platform="linkedin" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
