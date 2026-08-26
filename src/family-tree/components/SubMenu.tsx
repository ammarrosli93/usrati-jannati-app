import { IoPersonAddOutline } from "react-icons/io5";
import type { RelationType } from "../../types/familyTree.type";

type SubMenuProps = {
  onRelationSelect: (relation: RelationType) => void;
};

export const SubMenu = ({ onRelationSelect }: SubMenuProps) => {
  return (
    <div className="bg-transparent z-50 font-plusjakartasans text-sm text-black">
      <div className=" rounded-lg items-center w-30 p-1 bg-white/90 flex flex-col text-xs font-base subpixel-antialiased tracking-wide">
        <button
          onClick={() => onRelationSelect("parent")}
          className="flex flex-row gap-3 items-center hover:bg-teal-900 hover:text-yellow-300 w-full p-1 rounded-md"
        >
          <IoPersonAddOutline />
          <span>Add Parent</span>
        </button>
        <button
          onClick={() => onRelationSelect("sibling")}
          className="flex flex-row gap-3 items-center hover:bg-teal-900 hover:text-yellow-300 w-full p-1 rounded-md"
        >
          <IoPersonAddOutline />
          <span>Add Sibling</span>
        </button>
        <button
          onClick={() => onRelationSelect("child")}
          className="flex flex-row gap-3 items-center hover:bg-teal-900 hover:text-yellow-300 w-full p-1 rounded-md"
        >
          <IoPersonAddOutline />
          <span>Add Child</span>
        </button>
        <button
          onClick={() => onRelationSelect("spouse")}
          className="flex flex-row gap-3 items-center hover:bg-teal-900 hover:text-yellow-300 w-full p-1 rounded-md"
        >
          <IoPersonAddOutline />
          <span>Add Spouse</span>
        </button>
      </div>
    </div>
  );
};
