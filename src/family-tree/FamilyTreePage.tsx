import { useState } from "react";
import { EmptyState } from "./components/EmptyState";
import { AddMemberModal } from "./components/AddMemberModal";

const FamilyTreePage = () => {
  const [isMemberModalOpen, setAddMemberModalOpen] = useState(false);
  const handleOpen = () => {
    setAddMemberModalOpen(true);
  };
  const handleClose = () => {
    setAddMemberModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center">
      <EmptyState onAddMember={handleOpen} />
      {isMemberModalOpen && (
        <AddMemberModal onClose={handleClose} isOpen={handleOpen} />
      )}
    </div>
  );
};
export default FamilyTreePage;
