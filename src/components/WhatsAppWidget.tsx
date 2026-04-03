'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsApp } from './Icons';

export default function WhatsAppWidget() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white text-charcoal font-body text-sm px-4 py-2.5 rounded-xl shadow-float whitespace-nowrap"
          >
            דברו איתנו בוואטסאפ
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/972526244395"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 bg-green-wa rounded-full flex items-center justify-center shadow-float hover:scale-105 transition-transform duration-300"
        aria-label="שלחו הודעה בוואטסאפ"
      >
        <WhatsApp size={28} className="text-white" />
        <span className="absolute inset-0 rounded-full bg-green-wa animate-ping opacity-20" />
      </a>
    </div>
  );
}
