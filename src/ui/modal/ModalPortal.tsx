import { createPortal } from "react-dom";
import type { ReactNode } from "react";

const portalRoot = document.getElementById("modal-root");

type portalProps = {
  children: ReactNode;
};

export const ModalPortal = ({ children }: portalProps) => {
  if (!portalRoot) return null;
  return createPortal(children, portalRoot);
};
