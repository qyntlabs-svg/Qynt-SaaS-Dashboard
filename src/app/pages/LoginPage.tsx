import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Lock, Github, Linkedin } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, verify credentials
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a1a] flex items-center justify-center p-4">
      <ParticleBackground />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Glassmorphic Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* QYNT Logo with Glitch Effect */}
          <div className="text-center mb-8">
            <motion.h1
              className="text-5xl mb-2 bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  '0 0 20px rgba(99, 102, 241, 0.5)',
                  '0 0 40px rgba(99, 102, 241, 0.3)',
                  '0 0 20px rgba(99, 102, 241, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              QYNT
            </motion.h1>
            <h2 className="text-white/80">Labs</h2>
            <p className="text-white/60 mt-2">Automation Intelligence Platform</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-white/80 text-sm block">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(243,75%,58%)] focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-white/80 text-sm block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(243,75%,58%)] focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-white/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2 w-4 h-4 rounded border-white/20 bg-white/5 text-[hsl(243,75%,58%)] focus:ring-[hsl(243,75%,58%)]"
                />
                Remember me
              </label>
              <a href="#" className="text-[hsl(258,89%,66%)] hover:text-[hsl(258,89%,76%)] transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white rounded-xl py-3 shadow-lg shadow-[hsl(243,75%,58%)]/30 hover:shadow-[hsl(243,75%,58%)]/50 transition-all"
            >
              Sign In
            </motion.button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#0a0a1a] text-white/60">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 text-white/80 hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 text-white/80 hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.button>
            </div>
          </form>

          <p className="text-white/60 text-sm text-center mt-6">
            Don't have an account?{' '}
            <a href="#" className="text-[hsl(258,89%,66%)] hover:text-[hsl(258,89%,76%)] transition-colors">
              Sign up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
