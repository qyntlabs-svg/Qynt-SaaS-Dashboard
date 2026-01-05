import { motion } from 'motion/react';
import { Search, Download, MapPin, Briefcase } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const scoreData = [
  { name: 'John Doe', score: 92 },
  { name: 'Jane Smith', score: 88 },
  { name: 'Bob Johnson', score: 85 },
  { name: 'Alice Brown', score: 82 },
  { name: 'Charlie Wilson', score: 79 },
];

const candidates = [
  { name: 'John Doe', role: 'Senior Developer', location: 'San Francisco', score: 92, experience: '8 years' },
  { name: 'Jane Smith', role: 'Full Stack Engineer', location: 'New York', score: 88, experience: '6 years' },
  { name: 'Bob Johnson', role: 'Backend Developer', location: 'Austin', score: 85, experience: '5 years' },
];

export function LinkedInJobProfileFinder() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-1">LinkedIn Job Profile Finder</h1>
          <p className="text-muted-foreground">Find and score potential candidates</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white rounded-lg"
        >
          <Download className="w-4 h-4" />
          Export to CSV
        </motion.button>
      </div>

      {/* Search Panel */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Keywords..."
            className="bg-accent border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[hsl(243,75%,58%)]"
          />
          <input
            type="text"
            placeholder="Location..."
            className="bg-accent border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[hsl(243,75%,58%)]"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white rounded-lg"
          >
            <Search className="w-4 h-4" />
            Search
          </motion.button>
        </div>
      </div>

      {/* Candidate Scoring */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="mb-4">Candidate Scoring</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={scoreData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="score" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(243, 75%, 58%)" />
                <stop offset="100%" stopColor="hsl(258, 89%, 66%)" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Candidate Results */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="mb-4">Top Candidates</h3>
        <div className="space-y-3">
          {candidates.map((candidate, index) => (
            <motion.div
              key={candidate.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-accent rounded-lg hover:bg-accent/80 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] rounded-full flex items-center justify-center text-white">
                  {candidate.name[0]}
                </div>
                <div>
                  <p>{candidate.name}</p>
                  <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {candidate.role}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {candidate.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] bg-clip-text text-transparent">
                  {candidate.score}
                </div>
                <p className="text-xs text-muted-foreground">Match Score</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
