import { useState } from "react";
import { PopUpModal } from "./PopUpModal";
import { AnimatePresence } from "framer-motion";
import { PopUp } from "../../ui/modal/PopUp";
import type { MemberData } from "../../types/familyTree.type";
import { motion } from "framer-motion";

type MemberNodeProps = {
  memberList: MemberData;
  remove: (id: string) => void;
  add: (member: MemberData) => void;
  edit: (member: MemberData) => void;
};

type Mode = "Edit" | "Add" | "Remove";

type Coordinate = { x: number; y: number };

export const MemberNode = ({
  memberList,
  add,
  edit,
  remove,
}: MemberNodeProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalCoords, setModalCoords] = useState<Coordinate | null>(null);

  const handlePopUp = (e: React.MouseEvent) => {
    const card = e.currentTarget;
    const cardLoc = card.getBoundingClientRect();

    setModalCoords({ x: cardLoc.right, y: cardLoc.top });
    e.stopPropagation();

    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setModalCoords(null);
  };

  const handleUserChoice = (choice: Mode) => {
    setModalOpen(false);
    if (choice === "Add") add(memberList);
    if (choice === "Edit") edit(memberList);
    if (choice === "Remove") remove(memberList.id);
  };

  return (
    <>
      <motion.div
        onClick={handlePopUp}
        whileHover={{ scale: 1.1 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        className={`relative max-w-35 min-w-2/3 aspect-4/3 h-45 rounded-xl shadow-xs shadow-gray-400 ${memberList.status === "inactive" ? "grayscale" : ""}`}
      >
        <img
          src={memberList.avatar}
          alt="avatar"
          className="absolute z-0 w-full h-full object-cover rounded-xl"
        />
        <div className="relative z-50 flex flex-col justify-between w-full h-full rounded-xl">
          <div className="flex justify-end p-1"></div>
          <div className="font-roboto text-xs p-1 rounded-b-xl  backdrop-blur-sm w-full h-1/3 flex flex-col justify-between">
            <p>{memberList.name}</p>
            <div className="flex flex-row gap-1 items-center justify-start">
              <p className="p-0.5 px-2 bg-white/50 border border-white/30 h-auto w-fit rounded-full">
                {memberList.relation}
              </p>
              <p className="p-0.5 px-2 bg-white/50 border border-white/30 h-auto w-fit rounded-full">
                {memberList.status}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isModalOpen && (
          <PopUp onClose={handleClose}>
            <PopUpModal coords={modalCoords} userChoice={handleUserChoice} />
          </PopUp>
        )}
      </AnimatePresence>
    </>
  );
};
