import { motion } from 'motion/react';
import { User, Bell, Key, Database } from 'lucide-react';
import * as Switch from '@radix-ui/react-switch';
import { useState } from 'react';

export function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
  });

  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl">Settings</h1>

      {/* Profile */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-5 h-5" />
          <h3>Profile Information</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground block mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full bg-accent border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[hsl(243,75%,58%)]"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-2">Email</label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full bg-accent border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[hsl(243,75%,58%)]"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-5 h-5" />
          <h3>Notification Preferences</h3>
        </div>
        <div className="space-y-4">
          {Object.entries({
            email: 'Email Notifications',
            push: 'Push Notifications',
            weekly: 'Weekly Summary',
          }).map(([key, label]) => (
            <div key={key} className="flex items-center justify-between">
              <span>{label}</span>
              <Switch.Root
                checked={notifications[key as keyof typeof notifications]}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, [key]: checked }))
                }
                className="w-11 h-6 bg-muted rounded-full data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[hsl(243,75%,58%)] data-[state=checked]:to-[hsl(258,89%,66%)] transition-colors"
              >
                <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform translate-x-0.5 data-[state=checked]:translate-x-[22px]" />
              </Switch.Root>
            </div>
          ))}
        </div>
      </div>

      {/* API Keys */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Key className="w-5 h-5" />
          <h3>API Keys</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
            <code className="flex-1 text-sm">sk_live_************************</code>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white text-sm rounded-lg"
            >
              Regenerate
            </motion.button>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        className="px-6 py-3 bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white rounded-lg"
      >
        Save Changes
      </motion.button>
    </div>
  );
}
