'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Enrio Hernanda',
    role: 'Developer, NextVision',
    text: 'NextVision has been a game-changer for my business.',
  },
  {
    name: 'Abdul Rahman',
    role: 'Student, University',
    text: 'NextVision made my coding journey easier.',
  },
  {
    name: 'Siti Aisyah',
    role: 'Student, Coding Bootcamp',
    text: 'NextVision helped me land my dream job.',
  },
  {
    name: 'Mamat Ali',
    role: 'Developer, Company X',
    text: 'NextVision exceeded my expectations.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2 className="text-3xl font-bold mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          What Our Clients Say
        </motion.h2>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, x: fromLeft ? -80 : 80, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                {/* Text */}
                <motion.p className="text-gray-700 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                  “{t.text}”
                </motion.p>

                {/* Name */}
                <motion.h4 className="font-semibold" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                  {t.name}
                </motion.h4>

                {/* Role */}
                <motion.p className="text-sm text-gray-500" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                  {t.role}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
