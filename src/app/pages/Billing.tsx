import { motion } from 'motion/react';
import { CreditCard, Download, Check } from 'lucide-react';

const plans = [
  { name: 'Starter', price: '$29', features: ['3 Services', '1,000 API Calls', 'Basic Support'], current: false },
  { name: 'Pro', price: '$99', features: ['All Services', '10,000 API Calls', 'Priority Support', 'Advanced Analytics'], current: true },
  { name: 'Enterprise', price: '$299', features: ['Unlimited Services', 'Unlimited API Calls', '24/7 Support', 'Custom Integration'], current: false },
];

const invoices = [
  { date: '2025-01-01', amount: '$99.00', status: 'Paid' },
  { date: '2024-12-01', amount: '$99.00', status: 'Paid' },
  { date: '2024-11-01', amount: '$99.00', status: 'Paid' },
];

export function Billing() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Billing & Subscription</h1>

      {/* Current Plan */}
      <div className="bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] rounded-xl p-6 text-white">
        <h3 className="mb-2">Current Plan: Pro</h3>
        <p className="text-white/90 mb-4">Renews on February 1, 2026</p>
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-white/20 rounded-full h-2">
            <div className="bg-white rounded-full h-2 w-[65%]"></div>
          </div>
          <span className="text-sm">6,500 / 10,000 API calls</span>
        </div>
      </div>

      {/* Plans */}
      <div>
        <h3 className="mb-4">Available Plans</h3>
        <div className="grid grid-cols-3 gap-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -4 }}
              className={`bg-card border rounded-xl p-6 ${
                plan.current ? 'border-[hsl(243,75%,58%)] shadow-lg' : 'border-border'
              }`}
            >
              {plan.current && (
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white text-xs rounded-full mb-4">
                  Current Plan
                </div>
              )}
              <h4 className="mb-2">{plan.name}</h4>
              <p className="text-3xl mb-4">{plan.price}<span className="text-sm text-muted-foreground">/mo</span></p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className={`w-full py-2 rounded-lg ${
                  plan.current
                    ? 'bg-accent text-foreground'
                    : 'bg-gradient-to-r from-[hsl(243,75%,58%)] to-[hsl(258,89%,66%)] text-white'
                }`}
              >
                {plan.current ? 'Current' : 'Upgrade'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="mb-4">Payment History</h3>
        <div className="space-y-3">
          {invoices.map((invoice, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-accent rounded-lg">
              <div>
                <p>{invoice.date}</p>
                <p className="text-sm text-muted-foreground">Invoice</p>
              </div>
              <div className="flex items-center gap-4">
                <span>{invoice.amount}</span>
                <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">
                  {invoice.status}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="p-2 bg-accent rounded-lg"
                >
                  <Download className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
