import { motion } from 'motion/react';
import { Mail, Clock, CheckCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const emailData = [
  { day: 'Mon', processed: 45 },
  { day: 'Tue', processed: 52 },
  { day: 'Wed', processed: 61 },
  { day: 'Thu', processed: 48 },
  { day: 'Fri', processed: 73 },
  { day: 'Sat', processed: 28 },
  { day: 'Sun', processed: 15 },
];

export function GmailAutomation() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Gmail Automation</h1>
      
      <div className="grid grid-cols-3 gap-6">
        {[
          { label: 'Emails Processed', value: '247', icon: Mail },
          { label: 'Time Saved', value: '12.5 hrs', icon: Clock },
          { label: 'Auto-Responses', value: '89', icon: CheckCircle },
        ].map((stat, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6">
            <stat.icon className="w-8 h-8 text-[hsl(243,75%,58%)] mb-4" />
            <p className="text-2xl mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="mb-4">Email Activity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={emailData}>
            <defs>
              <linearGradient id="emailGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(243, 75%, 58%)" stopOpacity={0.8} />
                <stop offset="100%" stopColor="hsl(258, 89%, 66%)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Area type="monotone" dataKey="processed" stroke="hsl(243, 75%, 58%)" fill="url(#emailGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
