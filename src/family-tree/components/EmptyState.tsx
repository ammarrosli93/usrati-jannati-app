import type { ReactNode } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

type EmptyStateProps = {
  onAddMember: () => void;
};

export const EmptyState = ({ onAddMember }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center align-middle">
      <button className="hover:scale-105 " onClick={onAddMember}>
        <IoMdAddCircleOutline size={40} />
      </button>
      <p>Add Member</p>
    </div>
  );
};
