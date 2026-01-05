import { motion } from 'motion/react';
import { Bookmark, ExternalLink } from 'lucide-react';

const jobs = [
  { title: 'Senior React Developer', company: 'Tech Corp', salary: '$120K - $150K', match: 95, location: 'Remote' },
  { title: 'Full Stack Engineer', company: 'StartupXYZ', salary: '$100K - $130K', match: 88, location: 'San Francisco' },
  { title: 'Frontend Developer', company: 'Digital Agency', salary: '$90K - $120K', match: 82, location: 'New York' },
];

export function LinkedInJobFinder() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">LinkedIn Job Finder</h1>
      
      <div className="grid gap-4">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 flex items-center justify-between hover:border-[hsl(243,75%,58%)] transition-all"
          >
            <div>
              <h3>{job.title}</h3>
              <p className="text-muted-foreground">{job.company} • {job.location}</p>
              <p className="text-sm mt-2">{job.salary}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-2xl bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] bg-clip-text text-transparent">
                  {job.match}%
                </div>
                <p className="text-xs text-muted-foreground">Match</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="p-2 bg-accent rounded-lg"
              >
                <Bookmark className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="p-2 bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white rounded-lg"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
