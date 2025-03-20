
import React from 'react';
import { Navbar } from '@/components/ui/navbar';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={cn("flex-1 container py-6 md:py-10", className)}>
        <div className="animate-fade-up">
          {children}
        </div>
      </main>
    </div>
  );
}
