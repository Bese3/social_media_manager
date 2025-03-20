
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, PlusCircle, BarChart3, Calendar, Home, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NavItem = ({ 
  to, 
  icon: Icon, 
  label, 
  isMobile = false,
  onClick
}: { 
  to: string; 
  icon: React.ElementType; 
  label: string;
  isMobile?: boolean;
  onClick?: () => void;
}) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => cn(
      "group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium transition-all",
      isMobile ? "w-full" : "w-auto",
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-foreground/80 hover:bg-secondary hover:text-foreground"
    )}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </NavLink>
);

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/create', label: 'Create', icon: PlusCircle },
    { path: '/schedule', label: 'Schedule', icon: Calendar },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg border-b bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <NavLink 
            to="/" 
            className="flex items-center text-lg font-semibold"
            onClick={closeMobileMenu}
          >
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded mr-2 text-sm">SM</span>
            <span>SocialMaster</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavItem
              key={link.path}
              to={link.path}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm animate-fade-in md:hidden">
            <nav className="container py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavItem
                  key={link.path}
                  to={link.path}
                  icon={link.icon}
                  label={link.label}
                  isMobile
                  onClick={closeMobileMenu}
                />
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
