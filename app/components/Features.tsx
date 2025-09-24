'use client';

import { motion } from 'framer-motion';
import { BoltIcon, DevicePhoneMobileIcon, ShieldCheckIcon, SwatchIcon } from '@heroicons/react/24/outline';

const features = [
  { name: 'Fast Performance', icon: BoltIcon, desc: 'Optimized for speed and reliability.' },
  { name: 'Modern Design', icon: SwatchIcon, desc: 'Beautiful UI with clean layouts.' },
  { name: 'Secure & Reliable', icon: ShieldCheckIcon, desc: 'Built with security best practices.' },
  { name: 'Fully Responsive', icon: DevicePhoneMobileIcon, desc: 'Looks great on any device.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 className="text-3xl font-bold mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          Why Choose <span className="text-blue-600">NextVision?</span>
        </motion.h2>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <f.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{f.name}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
