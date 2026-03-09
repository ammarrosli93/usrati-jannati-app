import { IoAddCircleOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlinePersonRemove } from "react-icons/md";

type PopUpModalProps = {
  userChoice: (mode: Mode) => void;
  coords: { x: number; y: number } | null;
};

export const PopUpModal = ({ userChoice, coords }: PopUpModalProps) => {
  return (
    <div className=" bg-transparent z-50  font-roboto text-sm text-black ">
      <div
        style={{ position: "fixed", left: coords?.x - 50, top: coords?.y - 20 }}
        className=" rounded-lg items-center w-25 p-1 bg-white/90 flex flex-col text-xs font-base subpixel-antialiased tracking-wide"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            userChoice("Add");
          }}
          type="button"
          className="flex flex-row gap-3 items-center hover:bg-teal-900 hover:text-yellow-300 w-full p-1 rounded-md"
        >
          <div className="hover:bg-yellow-300">
            <IoAddCircleOutline />
          </div>

          <span>Add</span>
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
