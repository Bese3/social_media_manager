
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function MetricsCard({ 
  title, 
  value, 
  change, 
  trend = 'neutral', 
  subtitle, 
  icon,
  className
}: MetricsCardProps) {
  
  return (
    <div className={cn(
      "bg-card rounded-lg p-6 border shadow-sm transition-all duration-300 hover-lift", 
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          
          {(change !== undefined || subtitle) && (
            <div className="flex items-center mt-2">
              {change !== undefined && trend !== 'neutral' && (
                <div className={cn(
                  "flex items-center text-xs font-medium rounded-full px-1.5 py-0.5 mr-2",
                  trend === 'up' ? "text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30" : 
                  "text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30"
                )}>
                  {trend === 'up' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                  {Math.abs(change)}%
                </div>
              )}
              {subtitle && <span className="text-xs text-muted-foreground">{subtitle}</span>}
            </div>
          )}
        </div>
        
        {icon && (
          <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
