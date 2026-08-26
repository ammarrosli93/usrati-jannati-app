import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlinePersonRemove } from "react-icons/md";
import { useState } from "react";
import { SubMenu } from "./SubMenu";
import type { RelationType } from "../../types/familyTree.type";

type Mode = "Edit" | "Add" | "Remove";

type PopUpModalProps = {
  userChoice: (mode: Mode, relation?: RelationType) => void;
  coords: { x: number; y: number } | null;
};

export const PopUpModal = ({ userChoice, coords }: PopUpModalProps) => {
  const [subMenu, setSubMenu] = useState<boolean>(false);
  const [selectedRelationType, setSelectedRelationType] =
    useState<RelationType>();

  const handleRelationSelect = (relation: RelationType) => {
    setSelectedRelationType(relation);
    setSubMenu(false);
    userChoice("Add", relation);
  };

  return (
    <div className=" bg-transparent z-50  font-plusjakartasans text-sm text-black ">
      <div
        style={{
          position: "fixed",
          left: (coords?.x ?? 0) - 50,
          top: (coords?.y ?? 0) - 20,
        }}
        className=" rounded-lg items-center w-25 p-1 bg-white/90 flex flex-col text-xs font-base subpixel-antialiased tracking-wide"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="flex flex-row gap-3 items-center hover:bg-teal-900 hover:text-yellow-300 w-full p-1 rounded-md"
          onMouseEnter={() => setSubMenu(true)}
          onMouseLeave={() => setSubMenu(false)}
        >
          <div className="hover:bg-yellow-300">
            <IoAddCircleOutline />
          </div>

          <span>Add</span>
          <div
            onClick={(e) => {
              e.stopPropagation();
              userChoice("Add", selectedRelationType);
            }}
            className="absolute z-50 w-full"
            style={{
              position: "fixed",
              left: coords?.x - -40,
              top: coords?.y - 70,
            }}
          >
            {subMenu && <SubMenu onRelationSelect={handleRelationSelect} />}
          </div>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            userChoice("Edit");
          }}
          type="button"
          className="flex flex-row gap-3 items-center hover:bg-teal-900 hover:text-yellow-300 w-full p-1 rounded-md"
        >
          <AiOutlineEdit />
          <span>Edit</span>
        </button>
        <button
          title="Remove Member"
          onClick={(e) => {
            e.stopPropagation();
            userChoice("Remove");
          }}
          className="flex flex-row gap-3 items-center hover:bg-teal-900 hover:text-yellow-300 w-full p-1 rounded-md"
        >
          <MdOutlinePersonRemove />
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
};
