import type { ReactNode } from "react";
import { ModalPortal } from "./ModalPortal";
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return (
    <AnimatePresence>
      <ModalPortal>
        <motion.div
          initial={{ opacity: 0, transition: { duration: 0.3, ease: easeOut } }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: easeIn } }}
          className="fixed flex inset-0  justify-center items-center w-screen h-screen backdrop-blur-lg"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              transition: { duration: 0.3, ease: easeOut },
            }}
            animate={{ opacity: 1, scale: 0.96 }}
            exit={{
              opacity: 0,
              scale: 0.94,
              transition: { duration: 0.2, ease: easeIn },
            }}
            className="p-8 w-lg bg-white/70 border-white/10 rounded-xl shadow-md shadow-black/5"
          >
            {children}
          </motion.div>
        </motion.div>
      </ModalPortal>
    </AnimatePresence>
  );
};
