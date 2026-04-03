'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-pearl relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side — client's own work-1.jpg */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div
                className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-float"
                style={{ clipPath: 'polygon(0 0, 100% 4%, 100% 96%, 0% 100%)' }}
              >
                <Image
                  src="/annette-lashes/images/work-1.jpg"
                  alt="הלחמת ריסים — תקריב עין עם ריסים מושלמות"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Gold accent circles */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-gold/10 -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-pink/20 -z-10" />
              {/* Logo as decorative element */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-xl overflow-hidden shadow-card opacity-80 hidden lg:block">
                <Image
                  src="/annette-lashes/images/logo.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            {/* Gold decorative line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-10 h-[1px] bg-gold" />
              <span className="block w-2 h-2 rounded-full bg-gold" />
              <span className="block w-10 h-[1px] bg-gold" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-6">
              הסיפור של אנט
            </h2>
            <div className="space-y-4 font-body text-grey leading-relaxed">
              <p>
                מאז שזכרתי את עצמי, תחום היופי והאסתטיקה משך אותי. התחלתי את הדרך מתוך אהבה אמיתית לעולם הריסים והאיפור, ומאז לא הפסקתי ללמוד, להתפתח ולהשתפר.
              </p>
              <p>
                לאורך השנים עברתי הכשרות מקצועיות מהטובות בארץ, והתמחיתי בטכניקות מתקדמות של הלחמת ריסים בכל הסגנונות. כל לקוחה שמגיעה אליי מקבלת יחס אישי, ייעוץ מותאם והתאמה מדויקת למראה שהיא חולמת עליו.
              </p>
              <p>
                הסטודיו שלי במושב שילת הוא מקום שקט, אינטימי ונקי — כי מגיע לך חוויה מפנקת מהרגע שנכנסת מהדלת.
              </p>
            </div>
            <blockquote className="mt-8 pr-4 border-r-2 border-gold">
              <p className="font-display text-lg sm:text-xl italic text-gold-dark leading-relaxed">
                &ldquo;אני מאמינה שכל אישה יכולה להרגיש את הגרסה הכי יפה של עצמה — והתפקיד שלי הוא לעזור לה לגלות את זה.&rdquo;
              </p>
              <footer className="font-body text-sm text-grey mt-3">— אנט, מייסדת Annette Lashes</footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
