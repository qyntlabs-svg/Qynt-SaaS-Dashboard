import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  LayoutDashboard,
  Youtube,
  Linkedin,
  Briefcase,
  Mail,
  Star,
  Settings,
  CreditCard,
  HelpCircle,
} from 'lucide-react';

const services = [
  { id: 'youtube-analyzer', name: 'YouTube Analyzer', icon: Youtube, path: '/youtube-analyzer' },
  { id: 'linkedin-profile', name: 'LinkedIn Job Profile Finder', icon: Linkedin, path: '/linkedin-job-profile-finder' },
  { id: 'linkedin-jobs', name: 'LinkedIn Job Finder', icon: Briefcase, path: '/linkedin-job-finder' },
  { id: 'gmail', name: 'Gmail Automation', icon: Mail, path: '/gmail-automation' },
  { id: 'reviews', name: 'Google Review Analyzer', icon: Star, path: '/google-review-analyzer' },
];

const bottomLinks = [
  { name: 'Settings', icon: Settings, path: '/settings' },
  { name: 'Billing', icon: CreditCard, path: '/billing' },
  { name: 'Support', icon: HelpCircle, path: '/support' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <motion.aside
      initial={{ x: -240 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-screen w-60 bg-card border-r border-border shadow-xl z-40"
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/dashboard" className="block">
            <h1 className="text-2xl bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] bg-clip-text text-transparent">
              QYNT
            </h1>
            <p className="text-muted-foreground text-sm">Labs</p>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {/* Dashboard */}
          <div className="px-3 mb-6">
            <Link
              to="/dashboard"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                location.pathname === '/dashboard'
                  ? 'bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white shadow-lg'
                  : 'text-foreground hover:bg-accent'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
          </div>

          {/* Services */}
          <div className="px-3 mb-6">
            <p className="text-xs text-muted-foreground mb-2 px-3">SERVICES</p>
            <div className="space-y-1">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={service.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all group ${
                    location.pathname === service.path
                      ? 'bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white shadow-lg'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  <service.icon className="w-5 h-5" />
                  <span className="text-sm">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-border p-3">
          {bottomLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all mb-1 ${
                location.pathname === link.path
                  ? 'bg-accent text-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
            >
              <link.icon className="w-5 h-5" />
              <span className="text-sm">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
