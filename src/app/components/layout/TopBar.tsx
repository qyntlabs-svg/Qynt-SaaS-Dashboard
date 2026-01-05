import { Search, Bell, Sun, Moon, User } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function TopBar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-60 right-0 h-16 bg-card/80 backdrop-blur-lg border-b border-border z-30">
      <div className="flex items-center justify-between h-full px-8">
        {/* Search */}
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-accent/50 border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(243,75%,58%)] transition-all"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Plan Badge */}
          <div className="px-3 py-1 bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white text-xs rounded-full">
            Pro Plan
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </motion.button>

          {/* User Menu */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </motion.button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[220px] bg-card border border-border rounded-lg shadow-lg p-2"
                sideOffset={5}
              >
                <DropdownMenu.Item className="px-3 py-2 rounded-md hover:bg-accent cursor-pointer outline-none">
                  Profile
                </DropdownMenu.Item>
                <DropdownMenu.Item className="px-3 py-2 rounded-md hover:bg-accent cursor-pointer outline-none">
                  Settings
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-px bg-border my-1" />
                <DropdownMenu.Item className="px-3 py-2 rounded-md hover:bg-accent cursor-pointer text-destructive outline-none">
                  Logout
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  );
}
