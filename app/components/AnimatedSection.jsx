"use client";

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Este componente "envuelve" a cualquier otra sección para animarla
// cuando entra en la pantalla.
export function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // 'once: true' para que la animación ocurra solo una vez
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 }, // Empieza invisible y 75px más abajo
          visible: { opacity: 1, y: 0 },  // Termina visible y en su posición original
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
