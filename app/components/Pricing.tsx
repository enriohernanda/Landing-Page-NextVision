'use client';

import { motion } from 'framer-motion';

const plans = [
  { name: 'Free', price: 'Rp.0', features: ['Basic features'] },
  {
    name: 'Pro',
    price: 'Rp.300.000/month',
    features: ['All Free features', 'Priority support'],
    highlight: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2 className="text-3xl font-bold mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          Simple & Transparent Pricing
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative p-6 border rounded-xl shadow-sm hover:shadow-lg transition ${plan.highlight ? 'border-2 border-blue-600' : 'border'}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {plan.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">Best Value</span>}

              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                {plan.features.map((f, j) => (
                  <li key={j}>✅ {f}</li>
                ))}
              </ul>
              <button className="px-6 py-2 rounded-md cursor-pointer bg-blue-600 text-white hover:bg-blue-700'">Choose Plan</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
