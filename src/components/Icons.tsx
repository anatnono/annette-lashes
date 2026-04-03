const Icon = ({ d, size = 24, className = '', viewBox = '0 0 24 24', stroke = true, fill = false }: {
  d: string; size?: number; className?: string; viewBox?: string; stroke?: boolean; fill?: boolean;
}) => (
  <svg width={size} height={size} viewBox={viewBox} className={className}
    fill={fill ? 'currentColor' : 'none'} stroke={stroke ? 'currentColor' : 'none'}
    strokeWidth={stroke ? 1.5 : 0} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

export const Menu = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
    <line x1="3" y1="7" x2="21" y2="7" /><line x1="7" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
  </svg>
);

export const X = ({ size = 24, className = '' }) => (
  <Icon d="M18 6L6 18M6 6l12 12" size={size} className={className} />
);

export const Phone = ({ size = 24, className = '' }) => (
  <Icon d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" size={size} className={className} />
);

export const Mail = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
  </svg>
);

export const MapPin = ({ size = 24, className = '' }) => (
  <Icon d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" size={size} className={className} />
);

export const Clock = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
  </svg>
);

export const Star = ({ size = 24, className = '' }) => (
  <Icon d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" size={size} className={className} stroke={false} fill />
);

export const ChevronDown = ({ size = 24, className = '' }) => (
  <Icon d="M6 9l6 6 6-6" size={size} className={className} />
);

export const Send = ({ size = 24, className = '' }) => (
  <Icon d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" size={size} className={className} />
);

export const WhatsApp = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Accessibility = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
    <circle cx="12" cy="4" r="2" />
    <path d="M20 8h-5.6l-1.2 4h-2.4L9.6 8H4v2h4.4l1.8 6h-2.7l-1.2 4h2.2l.9-3h5.2l.9 3h2.2l-1.2-4h-2.7l1.8-6H20V8z" />
  </svg>
);

export const Lashes = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
    <path d="M2 12c0 0 4-6 10-6s10 6 10 6-4 6-10 6S2 12 2 12z" />
    <ellipse cx="12" cy="12" rx="3" ry="4" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <path d="M5 7l-1.5-3M8 5.5L7 2M12 4.5V1M16 5.5l1-3.5M19 7l1.5-3" />
  </svg>
);

export const LashLift = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
    <path d="M4 14c2-4 5-6 8-6s6 2 8 6" />
    <path d="M6 10c1-2 3-4 6-4s5 2 6 4" />
    <path d="M12 4v-2M8 5l-1-2M16 5l1-2" />
    <path d="M9 16c0 1.5 1.3 3 3 3s3-1.5 3-3" />
  </svg>
);

export const GlueLash = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
    <path d="M3 13c3-5 6-7 9-7s6 2 9 7" />
    <path d="M7 11l-2-4M10 9l-1-4M14 9l1-4M17 11l2-4" />
    <path d="M8 16h8M10 19h4" />
  </svg>
);

export const Brows = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
    <path d="M2 10c2-3 5-5 9-5 3 0 5 1 6 3" />
    <path d="M2 11c2-2 5-4 9-4 3 0 5 1 6 2.5" />
    <path d="M6 16c1.5-1 3-1.5 5-1.5s4 .5 6 2" />
    <circle cx="11" cy="17" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export const Makeup = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6v5l-1 1H10L9 8V3z" />
    <path d="M10 9h4v3a2 2 0 01-2 2 2 2 0 01-2-2V9z" />
    <path d="M12 14v4" />
    <path d="M9 18h6" />
    <path d="M8 21h8" />
  </svg>
);

export const CheckCircle = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
  </svg>
);

export const ArrowDown = ({ size = 24, className = '' }) => (
  <Icon d="M12 5v14M5 12l7 7 7-7" size={size} className={className} />
);

export const Instagram = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const User = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0112 0v1" />
  </svg>
);

export const Calendar = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const MessageSquare = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
  </svg>
);

export const Award = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </svg>
);

export const Users = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" /><circle cx="17" cy="7" r="3" /><path d="M21 21v-2a3 3 0 00-2-2.83" />
  </svg>
);

export const Sparkles = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7l2-7z" />
  </svg>
);

export const Gem = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12l4 7-10 12L2 10z" /><path d="M2 10h20" /><path d="M12 22V10" /><path d="M6 3l6 7 6-7" />
  </svg>
);
