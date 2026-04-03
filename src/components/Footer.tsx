import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from './Icons';

const services = [
  'הלחמת ריסים',
  'הרמת ריסים',
  'הרמת גבות',
  'עיצוב גבות',
  'הדבקת ריסים',
  'איפור ערב וכלות',
];

const infoLinks = [
  { label: 'אודות', href: '#about' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'המלצות', href: '#testimonials' },
  { label: 'צור קשר', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black-soft text-pearl/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand — logo image */}
          <div>
            <Image
              src="/annette-lashes/images/logo.jpg"
              alt="Annette Lashes"
              width={140}
              height={56}
              className="h-14 w-auto object-contain mb-4 rounded-lg"
            />
            <p className="font-body text-sm leading-relaxed text-pearl/60">
              סטודיו מקצועי להלחמת ריסים, הרמת ריסים וגבות, עיצוב גבות ואיפור ערב וכלות. חוויה אישית ותוצאות שמדברות בעד עצמן.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-gold font-semibold mb-4">שירותים</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="font-body text-sm text-pearl/60 hover:text-gold-light transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-lg text-gold font-semibold mb-4">מידע</h4>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-pearl/60 hover:text-gold-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-gold font-semibold mb-4">יצירת קשר</h4>
            <div className="space-y-3.5">
              <a href="tel:0526244395" className="flex items-center gap-3 group">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span className="font-body text-sm text-pearl/60 group-hover:text-gold-light transition-colors">052-624-4395</span>
              </a>
              <a href="mailto:annetteaviv5@gmail.com" className="flex items-center gap-3 group">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span className="font-body text-sm text-pearl/60 group-hover:text-gold-light transition-colors">annetteaviv5@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gold flex-shrink-0" />
                <span className="font-body text-sm text-pearl/60">מושב שילת, מודיעין</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-gold flex-shrink-0" />
                <span className="font-body text-sm text-pearl/60">א׳-ה׳ 09:00-19:00, ו׳ 09:00-14:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-pearl/40">
            Annette Lashes &copy; {new Date().getFullYear()} | כל הזכויות שמורות
          </p>
          <p className="font-body text-xs text-pearl/30">
            עוצב ופותח עם אהבה
          </p>
        </div>
      </div>
    </footer>
  );
}
