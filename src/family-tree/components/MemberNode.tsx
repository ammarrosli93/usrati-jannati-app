import { useState } from "react";
import { PopUpModal } from "./PopUpModal";
import { AnimatePresence } from "framer-motion";
import { PopUp } from "../../ui/modal/PopUp";
import type { MemberData, RelationType } from "../../types/familyTree.type";
import { motion } from "framer-motion";

type MemberNodeProps = {
  memberList: MemberData;
  remove: (id: string) => void;
  add: (member: MemberData, relation: RelationType) => void;
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

  const handleUserChoice = (choice: Mode, relation: RelationType) => {
    setModalOpen(false);
    if (choice === "Add" && relation) add(memberList, relation);
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
        className={`relative max-w-35 min-w-2/3 aspect-4/3 h-45 rounded-xl shadow-xs shadow-gray-400 scale-90 ${memberList.status === "inactive" ? "grayscale" : ""}`}
      >
        <img
          src={memberList.avatar}
          alt="avatar"
          className="absolute z-0 w-full h-full object-cover rounded-xl"
        />
        <div className="font-plusjakartasans relative z-50 flex flex-col justify-between w-full h-full rounded-xl">
          <div></div>
          <div className="p-1 rounded-b-xl backdrop-blur-sm w-full h-1/3 flex flex-col justify-between items-center">
            <p className="text-xs font-semibold text-center px-1">
              {memberList.name}
            </p>
            <p className="text-xs px-1 bg-white/50 border border-white/30 h-auto rounded-full scale-90 w-full items-center text-center">
              {memberList.location}
            </p>
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
