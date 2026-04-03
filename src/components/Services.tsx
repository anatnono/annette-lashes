'use client';

import { motion } from 'framer-motion';
import { Lashes, LashLift, GlueLash, Brows, Makeup } from './Icons';

const services = [
  {
    icon: Lashes,
    title: 'הלחמת ריסים',
    description: 'קלאסית, וולום, מגה וולום והיברידית — התאמה מדויקת לצורת העין ולסגנון שלך. ריסים טבעיים עם מראה מלא ומרשים, עם חומרים פרימיום שמחזיקים עד 4 שבועות.',
  },
  {
    icon: LashLift,
    title: 'הרמת ריסים + גבות',
    description: 'לאש ליפט ובראו ליפט לריסים וגבות טבעיים עם נפח ומראה מורם. בלי ריסים מלאכותיים — התוצאה היא עיניים פקוחות ומוארות שנשמרות עד 8 שבועות.',
  },
  {
    icon: GlueLash,
    title: 'הדבקת ריסים',
    description: 'ריסים זמניים לאירועים — מראה דרמטי ומרשים ליום או לערב. מושלם לחתונות, מסיבות ואירועים מיוחדים, בלי התחייבות לטווח ארוך.',
  },
  {
    icon: Brows,
    title: 'עיצוב גבות',
    description: 'עיצוב מדויק בשעווה ובפינצטה עם צביעת גבות — מסגור מושלם לפנים. התאמה אישית למבנה הפנים, לצורת העין ולסגנון שמחמיא לך.',
  },
  {
    icon: Makeup,
    title: 'איפור ערב וכלות',
    description: 'איפור מקצועי לאירועים, מותאם אישית לסגנון שלך. איפור כלות רומנטי ועמיד, איפור ערב דרמטי — עם מוצרים איכותיים שמחזיקים כל הלילה.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' as const },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-pearl-warm relative overflow-hidden">
      {/* Pink watercolor gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-wash via-transparent to-pink-wash/30 pointer-events-none" />

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
            השירותים שלנו
          </h2>
          <p className="font-body text-grey max-w-xl mx-auto">
            מגוון טיפולים מקצועיים שנבחרו בקפידה כדי להעניק לך את המראה המושלם
          </p>
        </motion.div>

        {/* Cards — top row 3, bottom row 2 centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(0, 3).map((service, i) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-500 group"
              >
                <div className="w-14 h-14 rounded-full bg-pink-soft flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500">
                  <IconComp size={26} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">{service.title}</h3>
                <p className="font-body text-sm text-grey leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8 max-w-2xl lg:max-w-[calc(66.666%+1rem)] mx-auto">
          {services.slice(3).map((service, i) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i + 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-500 group"
              >
                <div className="w-14 h-14 rounded-full bg-pink-soft flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500">
                  <IconComp size={26} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">{service.title}</h3>
                <p className="font-body text-sm text-grey leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
