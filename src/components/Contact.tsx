'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle } from './Icons';

const serviceOptions = [
  'הלחמת ריסים קלאסית',
  'הלחמת ריסים וולום',
  'הלחמת ריסים מגה וולום',
  'הלחמת ריסים היברידית',
  'הרמת ריסים',
  'הרמת גבות',
  'הדבקת ריסים',
  'עיצוב גבות',
  'איפור ערב',
  'איפור כלות',
  'ייעוץ ראשוני',
];

const successMessages: Record<string, string> = {
  'הלחמת ריסים קלאסית': 'מצוין! ניצור איתך קשר בקרוב כדי לקבוע תור להלחמת ריסים קלאסית.',
  'הלחמת ריסים וולום': 'מושלם! ניצור איתך קשר לקביעת תור להלחמת ריסים וולום.',
  'הלחמת ריסים מגה וולום': 'סגנון דרמטי — אהבנו! ניצור איתך קשר לקביעת תור.',
  'הלחמת ריסים היברידית': 'שילוב מנצח! ניצור איתך קשר לקביעת תור להלחמה היברידית.',
  'הרמת ריסים': 'יופי! ניצור איתך קשר לתיאום לאש ליפט.',
  'הרמת גבות': 'נהדר! ניצור איתך קשר בקרוב לקביעת תור להרמת גבות.',
  'הדבקת ריסים': 'מגניב! ניצור איתך קשר לתיאום הדבקת ריסים לאירוע.',
  'עיצוב גבות': 'תודה! ניצור איתך קשר לתיאום עיצוב גבות.',
  'איפור ערב': 'יופי! ניצור איתך קשר לתיאום איפור ערב.',
  'איפור כלות': 'מזל טוב! ניצור איתך קשר לתיאום איפור לחתונה.',
  'ייעוץ ראשוני': 'תודה! ניצור איתך קשר לתיאום ייעוץ ראשוני ללא עלות.',
};

const contactInfo = [
  { icon: Phone, label: '052-624-4395', href: 'tel:0526244395' },
  { icon: Mail, label: 'annetteaviv5@gmail.com', href: 'mailto:annetteaviv5@gmail.com' },
  { icon: MapPin, label: 'מושב שילת, מודיעין', href: '#' },
  { icon: Clock, label: 'א׳-ה׳ 09:00-19:00, ו׳ 09:00-14:00', href: '#' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://formsubmit.co/ajax/annetteaviv5@gmail.com', {
        method: 'POST',
        body: formData,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  const inputClasses = 'w-full font-body text-sm border border-pearl-deep rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors bg-cream/50';

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Subtle pink wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-wash/50 to-transparent pointer-events-none" />

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
            קבעו תור
          </h2>
          <p className="font-body text-grey max-w-xl mx-auto">
            השאירו פרטים ונחזור אליכם בהקדם לתיאום
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 shadow-card text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">ההודעה נשלחה בהצלחה</h3>
                <p className="font-body text-grey">
                  {successMessages[selectedService] || 'תודה שפנית אלינו! ניצור איתך קשר בהקדם.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-card space-y-5">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="פנייה חדשה מהאתר - Annette Lashes" />

                <div>
                  <label className="font-body text-sm text-charcoal mb-1.5 block">שם מלא</label>
                  <input type="text" name="name" required className={inputClasses} placeholder="השם שלך" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm text-charcoal mb-1.5 block">טלפון</label>
                    <input type="tel" name="phone" required className={inputClasses} placeholder="052-000-0000" />
                  </div>
                  <div>
                    <label className="font-body text-sm text-charcoal mb-1.5 block">אימייל</label>
                    <input type="email" name="email" className={inputClasses} placeholder="you@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm text-charcoal mb-1.5 block">שירות מבוקש</label>
                    <select
                      name="service"
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="">בחרו שירות</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-sm text-charcoal mb-1.5 block">תאריך מועדף</label>
                    <input type="date" name="preferred_date" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm text-charcoal mb-1.5 block">הודעה</label>
                  <textarea
                    name="message"
                    rows={4}
                    className={`${inputClasses} resize-none`}
                    placeholder="ספרו לנו מה אתם מחפשות..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-body bg-gold text-black py-3.5 rounded-xl hover:bg-gold-dark hover:text-white transition-colors duration-300 shadow-card hover:shadow-card-hover text-base font-medium"
                >
                  שליחת הודעה
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="font-display text-xl font-semibold text-charcoal mb-6">פרטי התקשרות</h3>
              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-gold-wash flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                        <IconComp size={18} className="text-gold" />
                      </div>
                      <span className="font-body text-sm text-grey group-hover:text-charcoal transition-colors pt-2.5">
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-card">
              <iframe
                title="מפת הגעה - Annette Lashes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.5!2d34.95!3d31.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU0JzAwLjAiTiAzNMKwNTcnMDAuMCJF!5e0!3m2!1siw!2sil!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
