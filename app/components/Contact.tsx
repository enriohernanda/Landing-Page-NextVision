'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          Contact Us
        </motion.h2>

        {/* Form */}
        <motion.form
          className="grid gap-4 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Input Name */}
          <motion.input type="text" placeholder="Name" className="p-3 rounded-md border" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} />

          {/* Input Email */}
          <motion.input type="email" placeholder="Email" className="p-3 rounded-md border" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} />

          {/* Textarea */}
          <motion.textarea placeholder="Message" className="p-3 rounded-md border" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} />

          {/* Button */}
          <motion.button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
