
import React, { useState } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { ContentCreator } from '@/components/content/ContentCreator';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { Sparkles, Lightbulb, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const CreateContent = () => {
  const { toast } = useToast();
  const [input, setInput] = useState("");
  const [content, setContent] = useState("");
  
  const handleGenerateIdeas = () => {
    toast({
      title: "AI is generating ideas",
      description: "This would connect to an AI service to generate content ideas.",
    });
    fetch("http://localhost:5000/content/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic: "calssy Social Media Marketing topic to discuss",
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setContent(`${data.caption}\n\n\n${data.description}\n\n\n${data.hashtags[0]}`);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };
  
  
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Create Content</h1>
            <p className="text-muted-foreground mt-1">Create and schedule your social media posts</p>
          </div>
          <Button onClick={handleGenerateIdeas}>
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Ideas
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <ContentCreator defaultInput={content} />
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <DashboardCard 
              title="AI Suggestions" 
              icon={<Lightbulb className="h-5 w-5" />}
            >
              <div className="space-y-4">
                <div className="p-3 bg-secondary/50 rounded-md">
                  <h3 className="font-medium text-sm">Product Showcase</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Show off your newest product with a carousel post highlighting key features.
                  </p>
                </div>
                
                <div className="p-3 bg-secondary/50 rounded-md">
                  <h3 className="font-medium text-sm">Trending Topic</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Join the conversation on #SustainableFashion with your brand's perspective.
                  </p>
                </div>
                
                <div className="p-3 bg-secondary/50 rounded-md">
                  <h3 className="font-medium text-sm">Customer Spotlight</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Share user-generated content featuring your products in real-world settings.
                  </p>
                </div>
                
                <div className="p-3 bg-secondary/50 rounded-md">
                  <h3 className="font-medium text-sm">Behind the Scenes</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Give followers a peek at your office culture or production process.
                  </p>
                </div>
                
                <Button variant="outline" className="w-full" size="sm" onClick={handleGenerateIdeas}>
                  <Sparkles className="h-3 w-3 mr-2" />
                  More Ideas
                </Button>
              </div>
            </DashboardCard>
            
            <DashboardCard 
              title="Optimal Posting Times" 
              icon={<Clock className="h-5 w-5" />}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Twitter</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">12:00 PM - 1:00 PM</p>
                    <p className="text-xs text-muted-foreground text-right">+28% engagement</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Instagram</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">5:00 PM - 6:00 PM</p>
                    <p className="text-xs text-muted-foreground text-right">+32% engagement</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Facebook</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">1:00 PM - 3:00 PM</p>
                    <p className="text-xs text-muted-foreground text-right">+18% engagement</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">LinkedIn</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">9:00 AM - 11:00 AM</p>
                    <p className="text-xs text-muted-foreground text-right">+24% engagement</p>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateContent;
