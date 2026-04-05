'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { value: '12+', label: 'שנות ניסיון' },
  { value: '150+', label: 'לקוחות' },
  { value: 'חומרים', label: 'פרימיום' },
  { value: 'הגעה', label: 'לבית הלקוח' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: 'easeOut' as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background image — client's own work-2.jpg */}
      <Image
        src="/annette-lashes/images/work-5.jpg"
        alt="הלחמת ריסים מקצועית — תקריב ריסים דרמטיות"
        fill
        priority
        className="object-cover brightness-[0.5]"
        sizes="100vw"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Gold decorative line */}
          <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3">
            <span className="block w-12 h-[1.5px] bg-pink-light" />
            <span className="font-body text-xs tracking-[0.25em] text-pink-light uppercase">Annette Lashes</span>
            <span className="block w-12 h-[1.5px] bg-pink-light" />
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight"
          >
            המבט שלך, המומחיות שלנו
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="font-body text-base sm:text-lg text-pearl-deep/90 max-w-2xl leading-relaxed"
          >
            הלחמת ריסים בכל הסגנונות, הרמת ריסים וגבות, הדבקת ריסים ואיפור כלות וערב — הכל בגישה אישית, עם חומרים פרימיום ותוצאות שמדברות בעד עצמן.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#contact"
              className="font-body bg-pink text-white px-8 py-3.5 rounded-full text-base hover:bg-pink-deep hover:text-white transition-all duration-300 shadow-float hover:shadow-card-hover"
            >
              קבעו תור
            </a>
            <a
              href="#services"
              className="font-body border border-pink/60 text-pink-light px-8 py-3.5 rounded-full text-base hover:bg-pink/10 transition-all duration-300"
            >
              הכירו את השירותים
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-full mt-auto"
      >
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-px">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center py-6 px-4">
                <span className="font-display text-2xl sm:text-3xl font-bold text-pink-light">{stat.value}</span>
                <span className="font-body text-xs sm:text-sm text-pearl-deep/80 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
