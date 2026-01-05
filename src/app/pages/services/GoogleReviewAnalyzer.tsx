import { motion } from 'motion/react';
import { Star, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ratingData = [
  { rating: '5★', count: 145, color: 'hsl(120, 60%, 50%)' },
  { rating: '4★', count: 89, color: 'hsl(150, 60%, 50%)' },
  { rating: '3★', count: 34, color: 'hsl(200, 70%, 55%)' },
  { rating: '2★', count: 12, color: 'hsl(30, 80%, 60%)' },
  { rating: '1★', count: 8, color: 'hsl(350, 80%, 60%)' },
];

export function GoogleReviewAnalyzer() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Google Review Analyzer</h1>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <span className="text-2xl">4.6</span>
          </div>
          <p className="text-sm text-muted-foreground">Average Rating</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-2xl mb-1 text-green-500">89%</p>
          <p className="text-sm text-muted-foreground">Positive Sentiment</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-2">
          <TrendingUp className="w-8 h-8 text-green-500" />
          <div>
            <p className="text-2xl">+23</p>
            <p className="text-sm text-muted-foreground">New Reviews</p>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="mb-4">Rating Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ratingData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
            <YAxis dataKey="rating" type="category" stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="count" radius={[0, 8, 8, 0]}>
              {ratingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
