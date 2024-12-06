import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
export function WinnerOverlay({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      <>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ bounce: 0 }}
            className="inset-0 tracking-wide top-0 right-0 left-0 bottom-0 bg-green-700 bg-opacity-30 grid place-items-center absolute text-2xl font-bold text-white"
          >
            WINNER!
          </motion.div>
        )}
      </>
    </AnimatePresence>
  );
}
