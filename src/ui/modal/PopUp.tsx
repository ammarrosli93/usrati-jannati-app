import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ModalPortal } from "./ModalPortal";

type PopUpProp = {
  children: ReactNode;
  onClose: () => void;
};

export const PopUp = ({ children, onClose }: PopUpProp) => {
  return (
    <ModalPortal>
      <motion.div
        className="fixed inset-0 z-40 w-screen h-screen"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </ModalPortal>
  );
};
