'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from './Icons';

const testimonials = [
  {
    name: 'שירלי מ.',
    service: 'הלחמת ריסים וולום',
    image: '/annette-lashes/images/client-1.jpg',
    text: 'הגעתי לאנט אחרי שניסיתי כמה מקומות ולא הייתי מרוצה. היא הבינה בדיוק איזה סגנון מתאים לצורת העין שלי ועשתה לי הלחמה וולום מושלמת. הריסים נראות מלאות, טבעיות ומחזיקות מעולה. כבר שנה שאני לקוחה קבועה ולא אשנה.',
  },
  {
    name: 'דנה כ.',
    service: 'איפור כלות',
    image: '/annette-lashes/images/client-2.jpg',
    text: 'אנט איפרה אותי ביום החתונה והפכה אותי לגרסה הכי יפה של עצמי. עשינו ניסיון מראש, היא הקשיבה בדיוק למה שרציתי, והתוצאה הייתה חלומית. האיפור החזיק מהצילומים ועד סוף הלילה — וכל האורחות שאלו מי עשה לי.',
  },
  {
    name: 'רונית א.',
    service: 'הרמת ריסים',
    image: '/annette-lashes/images/client-3.jpg',
    text: 'עשיתי הרמת ריסים (לאש ליפט) אצל אנט ואני מתה על התוצאה. העיניים נראות פקוחות ומואצות בלי טיפת מסקרה. הטיפול היה נעים ומהיר, ואנט הסבירה כל שלב. התוצאה החזיקה לי כמעט חודשיים — ממליצה בחום.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-pink-wash relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-soft/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          {/* Gold decorative line */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-10 h-[1px] bg-gold" />
            <span className="block w-2 h-2 rounded-full bg-gold" />
            <span className="block w-10 h-[1px] bg-gold" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4">
            מה הלקוחות אומרות
          </h2>
          <p className="font-body text-grey max-w-xl mx-auto">
            ביקורות אמיתיות מלקוחות מרוצות
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-500 flex flex-col"
            >
              {/* Gold stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={18} className="text-gold" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="font-body text-sm text-grey leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-pearl-deep/30">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gold/20">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-charcoal">{t.name}</p>
                  <p className="font-body text-xs text-gold-dark">{t.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
