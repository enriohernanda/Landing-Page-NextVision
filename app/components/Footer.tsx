'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 text-center">
      <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }} className="text-blue-600 text-sm cursor-default">
        © 2025 <span className="font-semibold">NextVision</span>. All rights reserved.
      </motion.p>
    </footer>
  );
}
