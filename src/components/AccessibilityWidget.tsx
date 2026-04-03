'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accessibility, X } from './Icons';

interface A11yState {
  fontSize: number;
  contrast: boolean;
  grayscale: boolean;
  bigCursor: boolean;
  spacing: boolean;
  linkHighlight: boolean;
}

const defaultState: A11yState = {
  fontSize: 0,
  contrast: false,
  grayscale: false,
  bigCursor: false,
  spacing: false,
  linkHighlight: false,
};

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(defaultState);

  const applyStyles = useCallback((newState: A11yState) => {
    const html = document.documentElement;
    html.style.fontSize = newState.fontSize ? `${100 + newState.fontSize * 15}%` : '';
    html.classList.toggle('a11y-contrast', newState.contrast);
    html.style.filter = newState.grayscale ? 'grayscale(1)' : '';
    html.classList.toggle('a11y-big-cursor', newState.bigCursor);
    html.classList.toggle('a11y-spacing', newState.spacing);
    html.classList.toggle('a11y-links', newState.linkHighlight);
  }, []);

  const update = (key: keyof A11yState, value: number | boolean) => {
    const newState = { ...state, [key]: value };
    setState(newState);
    applyStyles(newState);
  };

  const reset = () => {
    setState(defaultState);
    applyStyles(defaultState);
  };

  return (
    <>
      <style>{`
        .a11y-contrast { filter: contrast(1.4) !important; }
        .a11y-big-cursor, .a11y-big-cursor * { cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='14' fill='%23D4A0B5' stroke='white' stroke-width='2'/%3E%3C/svg%3E") 16 16, auto !important; }
        .a11y-spacing p, .a11y-spacing li, .a11y-spacing span, .a11y-spacing div { letter-spacing: 0.08em !important; word-spacing: 0.16em !important; line-height: 1.8 !important; }
        .a11y-links a { outline: 2px solid var(--gold) !important; outline-offset: 2px !important; text-decoration: underline !important; }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-float p-6 w-72 border border-pink-soft"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-lg font-semibold text-charcoal">נגישות</h3>
                <button onClick={() => setOpen(false)} className="text-grey hover:text-charcoal" aria-label="סגירה">
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Font size */}
                <div>
                  <label className="font-body text-sm text-charcoal mb-2 block">גודל גופן</label>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3].map((level) => (
                      <button
                        key={level}
                        onClick={() => update('fontSize', level)}
                        className={`flex-1 py-2 rounded-lg text-sm font-body transition-colors ${
                          state.fontSize === level
                            ? 'bg-pink text-white'
                            : 'bg-pearl text-charcoal hover:bg-pearl-deep'
                        }`}
                      >
                        {level === 0 ? 'רגיל' : `+${level}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Toggle buttons */}
                {[
                  { key: 'contrast' as const, label: 'ניגודיות גבוהה' },
                  { key: 'grayscale' as const, label: 'גווני אפור' },
                  { key: 'bigCursor' as const, label: 'סמן מוגדל' },
                  { key: 'spacing' as const, label: 'ריווח טקסט' },
                  { key: 'linkHighlight' as const, label: 'הדגשת קישורים' },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => update(key, !state[key])}
                    className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-body transition-colors ${
                      state[key]
                        ? 'bg-pink/10 text-pink-deep border border-pink/20'
                        : 'bg-pearl text-charcoal hover:bg-pearl-deep'
                    }`}
                  >
                    <span>{label}</span>
                    <span className={`w-8 h-4 rounded-full transition-colors relative ${state[key] ? 'bg-pink' : 'bg-grey-light'}`}>
                      <span className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${state[key] ? 'right-0.5' : 'right-4'}`} />
                    </span>
                  </button>
                ))}

                {/* Reset */}
                <button
                  onClick={reset}
                  className="w-full py-2.5 rounded-lg text-sm font-body text-grey hover:text-pink-deep hover:bg-pearl transition-colors border border-pearl-deep mt-2"
                >
                  איפוס הגדרות
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button — pink to match brand */}
        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-12 bg-pink rounded-full flex items-center justify-center shadow-float hover:bg-pink-deep hover:scale-105 transition-all duration-300"
          aria-label="הגדרות נגישות"
        >
          <Accessibility size={22} className="text-white" />
        </button>
      </div>
    </>
  );
}
