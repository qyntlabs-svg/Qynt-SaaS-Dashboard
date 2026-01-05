import { motion } from 'motion/react';
import { Download, TrendingUp, Eye, ThumbsUp, Clock } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const viewsData = [
  { date: 'Jan', views: 4000, engagement: 2400 },
  { date: 'Feb', views: 3000, engagement: 1398 },
  { date: 'Mar', views: 2000, engagement: 9800 },
  { date: 'Apr', views: 2780, engagement: 3908 },
  { date: 'May', views: 1890, engagement: 4800 },
  { date: 'Jun', views: 2390, engagement: 3800 },
  { date: 'Jul', views: 3490, engagement: 4300 },
];

const sentimentData = [
  { name: 'Positive', value: 68, color: 'hsl(120, 60%, 50%)' },
  { name: 'Neutral', value: 22, color: 'hsl(200, 70%, 55%)' },
  { name: 'Negative', value: 10, color: 'hsl(350, 80%, 60%)' },
];

const topVideos = [
  { title: 'Introduction to AI', views: '125K', engagement: '4.2%', thumbnail: '🎥' },
  { title: 'Machine Learning Basics', views: '98K', engagement: '3.8%', thumbnail: '🎥' },
  { title: 'Deep Learning Tutorial', views: '87K', engagement: '4.5%', thumbnail: '🎥' },
  { title: 'Neural Networks Explained', views: '76K', engagement: '3.9%', thumbnail: '🎥' },
];

const metrics = [
  { label: 'Total Views', value: '1.2M', icon: Eye, change: '+12.5%', color: 'text-blue-500' },
  { label: 'Avg Engagement', value: '4.1%', icon: ThumbsUp, change: '+0.3%', color: 'text-green-500' },
  { label: 'Watch Time', value: '34.5K hrs', icon: Clock, change: '+8.2%', color: 'text-purple-500' },
  { label: 'Growth Rate', value: '+15.3%', icon: TrendingUp, change: '+2.1%', color: 'text-orange-500' },
];

export function YouTubeAnalyzer() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-1">YouTube Analyzer</h1>
          <p className="text-muted-foreground">Track video performance and audience engagement</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white rounded-lg shadow-sm"
        >
          <Download className="w-4 h-4" />
          Export Data
        </motion.button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <metric.icon className={`w-8 h-8 ${metric.color}`} />
              <span className="text-sm text-green-500">{metric.change}</span>
            </div>
            <p className="text-2xl mb-1">{metric.value}</p>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Growth Timeline */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="mb-4">Growth Timeline</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={viewsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="views" stroke="hsl(243, 75%, 58%)" strokeWidth={2} />
              <Line type="monotone" dataKey="engagement" stroke="hsl(258, 89%, 66%)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Comment Sentiment */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="mb-4">Comment Sentiment Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {sentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Performing Videos */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="mb-4">Top Performing Videos</h3>
        <div className="space-y-3">
          {topVideos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-accent rounded-lg hover:bg-accent/80 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] rounded-lg flex items-center justify-center text-2xl">
                  {video.thumbnail}
                </div>
                <div>
                  <p>{video.title}</p>
                  <p className="text-sm text-muted-foreground">{video.views} views</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-500">{video.engagement}</p>
                <p className="text-xs text-muted-foreground">Engagement Rate</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
