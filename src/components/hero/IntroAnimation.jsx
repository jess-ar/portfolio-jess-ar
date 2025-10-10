import { useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = () => {
  const [show, setShow] = useState(true);
  const [ready, setReady] = useState(false);
  const [dims, setDims] = useState({ cx: 0, cy: 0, w0: 0, h0: 0, w1: 0, h1: 0 });

  useLayoutEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const cx = vw / 2;
    const cy = vh / 2;

    const BASE_W = 200;
    const BASE_H = 400;
    const aspect = BASE_H / BASE_W;

    const w0 = 6;
    const h0 = w0 * aspect;
    const diag = Math.hypot(vw, vh);
    const w1 = diag * 2;
    const h1 = w1 * aspect;

    setDims({ cx, cy, w0, h0, w1, h1 });
    setReady(true);

    const t = setTimeout(() => setShow(false), 3200);
    return () => clearTimeout(t);
  }, []);

  const { cx, cy, w0, h0, w1, h1 } = dims;

  return (
    <AnimatePresence>
      {show && ready && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-transparent pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="revealMask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
                <rect width="100%" height="100%" fill="white" />
                <motion.image
                  href="/icons/lock.svg"
                  initial={{ x: cx - w0 / 2, y: cy - h0 / 2, width: w0, height: h0 }}
                  animate={{ x: cx - w1 / 2, y: cy - h1 / 2, width: w1, height: h1 }}
                  transition={{ duration: 2.6, ease: [0.4, 0, 0.2, 1] }}
                  preserveAspectRatio="xMidYMid meet"
                />
              </mask>
            </defs>

            <rect width="100%" height="100%" fill="#000" mask="url(#revealMask)" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
