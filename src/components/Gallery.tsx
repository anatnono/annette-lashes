'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: '/annette-lashes/images/work-1.jpg', alt: 'הלחמת ריסים — עין ירוקה עם ריסים מושלמות', label: 'הלחמת ריסים' },
  { src: '/annette-lashes/images/work-2.jpg', alt: 'עיצוב גבות — עין ירוקה זווית שונה', label: 'עיצוב גבות' },
  { src: '/annette-lashes/images/work-3.jpg', alt: 'ריסים ווליום — עין חומה עם ריסים מלאות', label: 'ריסים ווליום' },
  { src: '/annette-lashes/images/work-4.jpg', alt: 'ריסים מגה ווליום — עין חומה בזווית', label: 'ריסים מגה ווליום' },
  { src: '/annette-lashes/images/work-5.jpg', alt: 'הלחמה דרמטית — עין חומה מבט צד', label: 'הלחמה דרמטית' },
  { src: '/annette-lashes/images/work-6.jpg', alt: 'תהליך העבודה — תקריב ריסים עם מברשת', label: 'תהליך העבודה' },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const },
  }),
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            מהעבודות שלנו
          </h2>
          <p className="font-body text-grey max-w-xl mx-auto">
            תוצאות אמיתיות שמדברות בעד עצמן
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Pink overlay on hover */}
              <div className="absolute inset-0 bg-pink/0 group-hover:bg-pink/40 transition-colors duration-500 flex items-end justify-center pb-8">
                <span className="font-display text-lg text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
