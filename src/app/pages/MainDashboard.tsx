import { motion } from 'motion/react';
import { Youtube, Linkedin, Briefcase, Mail, Star, TrendingUp, Users, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'youtube',
    name: 'YouTube Analyzer',
    icon: Youtube,
    description: 'Analyze video performance and engagement',
    stats: '3 reports this week',
    status: 'active',
    path: '/youtube-analyzer',
  },
  {
    id: 'linkedin-profile',
    name: 'LinkedIn Job Profile Finder',
    icon: Linkedin,
    description: 'Find and score potential candidates',
    stats: '12 candidates found',
    status: 'active',
    path: '/linkedin-job-profile-finder',
  },
  {
    id: 'linkedin-jobs',
    name: 'LinkedIn Job Finder',
    icon: Briefcase,
    description: 'Discover relevant job opportunities',
    stats: '5 new matches',
    status: 'active',
    path: '/linkedin-job-finder',
  },
  {
    id: 'gmail',
    name: 'Gmail Automation',
    icon: Mail,
    description: 'Automate email workflows',
    stats: '247 emails processed',
    status: 'active',
    path: '/gmail-automation',
  },
  {
    id: 'reviews',
    name: 'Google Review Analyzer',
    icon: Star,
    description: 'Monitor and analyze customer reviews',
    stats: '89% positive sentiment',
    status: 'active',
    path: '/google-review-analyzer',
  },
];

const quickStats = [
  { label: 'Total Services', value: '5', icon: Activity, change: '+2 this month' },
  { label: 'Active Users', value: '1,234', icon: Users, change: '+12% vs last month' },
  { label: 'Reports Generated', value: '847', icon: TrendingUp, change: '+23% vs last week' },
];

export function MainDashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] rounded-2xl p-8 text-white shadow-xl"
      >
        <h1 className="text-3xl mb-2">Welcome to QYNT Labs</h1>
        <p className="text-white/90">Transform data into quantified intelligence with our automation platform</p>
        
        <div className="grid grid-cols-3 gap-6 mt-8">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/20 rounded-lg">
                  <stat.icon className="w-5 h-5" />
                </div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
              <p className="text-2xl mb-1">{stat.value}</p>
              <p className="text-white/70 text-xs">{stat.change}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services Grid */}
      <div>
        <h2 className="text-xl mb-4">Your Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link to={service.path}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-[hsl(243,75%,58%)] transition-all shadow-sm hover:shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-[hsl(243,75%,58%)]/10 to-[hsl(258,89%,66%)]/10 rounded-lg group-hover:from-[hsl(243,75%,58%)]/20 group-hover:to-[hsl(258,89%,66%)]/20 transition-all">
                      <service.icon className="w-6 h-6 text-[hsl(243,75%,58%)]" />
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      service.status === 'active'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                  
                  <h3 className="mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[hsl(243,75%,58%)]">{service.stats}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white text-sm rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                      Launch
                    </motion.button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="mb-4">Quick Actions</h3>
        <div className="grid grid-cols-3 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-accent rounded-lg text-left hover:bg-accent/80 transition-all"
          >
            <p>Generate Report</p>
            <p className="text-sm text-muted-foreground mt-1">Create a new analysis report</p>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-accent rounded-lg text-left hover:bg-accent/80 transition-all"
          >
            <p>Connect Service</p>
            <p className="text-sm text-muted-foreground mt-1">Add a new integration</p>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-accent rounded-lg text-left hover:bg-accent/80 transition-all"
          >
            <p>View Analytics</p>
            <p className="text-sm text-muted-foreground mt-1">See detailed insights</p>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
