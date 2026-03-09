import { useState } from "react";
import { EmptyState } from "./components/EmptyState";
import { AddMemberModal } from "./components/AddMemberModal";
import { TreeCanvas } from "./components/TreeCanvas";
import type { MemberData, MemberFormData } from "../types/familyTree.type";

const getPlaceholder = (gender: "male" | "female") => {
  if (gender === "male") return "/avatars/male.png";
  else return "/avatars/female.png";
};

const FamilyTreePage = () => {
  const [isMemberModalOpen, setAddMemberModalOpen] = useState(false);
  const [members, setMembers] = useState<MemberData[]>([]);
  const [selectedMember, setSelectedMember] = useState<MemberData | null>(null);
  const [clickMember, setClickMember] = useState<MemberData | null>(null);

  const handleOpen = (member?: MemberData) => {
    if (member) {
      setClickMember(member);
    }
    setAddMemberModalOpen(true);
  };
  const handleClose = () => {
    setClickMember(null);
    setAddMemberModalOpen(false);
    setSelectedMember(null);
  };

  const handleFormSubmit = (formData: MemberFormData) => {
    console.log(clickMember?.id, "Jadilagi");
    console.log(formData.relation, "relation");
    if (selectedMember === null) {
      const newMemberId = crypto.randomUUID();
      const targetId = clickMember?.id;
      console.log(targetId, "menjadi");
      const member: MemberData = {
        id: newMemberId,
        ...formData,
        avatar: formData.avatar || getPlaceholder(formData.gender),
        parentId: formData.relation === "child" && targetId ? [targetId] : [],
        spouseId: formData.relation === "spouse" && targetId ? [targetId] : [],
        childrenId:
          formData.relation === "spouse" && clickMember
            ? [...clickMember.childrenId]
            : formData.relation === "parent" && targetId
              ? [targetId]
              : [],
        siblingId:
          formData.relation === "sibling" && targetId ? [targetId] : [],
      };
      setMembers((prev) => {
        const updatedPrev = prev.map((m) => {
          if (m.id === targetId) {
            return {
              ...m,
              parentId:
                formData.relation === "parent"
                  ? [...m.parentId, newMemberId]
                  : m.parentId,
              childrenId:
                formData.relation === "child"
                  ? [...m.childrenId, newMemberId]
                  : m.childrenId,
              spouseId:
                formData.relation === "spouse"
                  ? [...m.spouseId, newMemberId]
                  : m.spouseId,
              siblingId:
                formData.relation === "sibling"
                  ? [...m.siblingId, newMemberId]
                  : m.siblingId,
            };
          }
          if (
            formData.relation === "spouse" &&
            targetId &&
            m.parentId.includes(targetId)
          ) {
            return { ...m, parentId: [...m.parentId, newMemberId] };
          }
          if (
            formData.relation === "child" &&
            targetId &&
            m.spouseId.includes(targetId)
          ) {
            return { ...m, childrenId: [...m.childrenId, newMemberId] };
          }
          return m;
        });
        const finalList = [...updatedPrev, member];
        console.log(finalList);
        return finalList;
      });
    } else {
      setMembers((prev) => {
        return prev.map((m) =>
          m.id === selectedMember.id
            ? {
                ...m,
                ...formData,
                avatar:
                  formData.avatar ||
                  m.avatar ||
                  getPlaceholder(formData.gender),
              }
            : m,
        );
      });
    }
    setClickMember(null);
    setAddMemberModalOpen(false);
    setSelectedMember(null);
  };

  const handleEditMember = (member: MemberData) => {
    setSelectedMember(member);
    setAddMemberModalOpen(true);
  };

  const handleRemoveMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="flex items-center justify-center">
      {members.length > 0 ? (
        <div className="flex flex-row gap-5">
          <TreeCanvas
            members={members}
            onRemoveMember={handleRemoveMember}
            onAddMember={handleOpen}
            onEditMember={handleEditMember}
          />
        </div>
      ) : (
        <EmptyState onAddMember={handleOpen} />
      )}
      {isMemberModalOpen && (
        <AddMemberModal
          firstMember={members.length === 0}
          onClose={handleClose}
          onSubmit={handleFormSubmit}
          defaultValue={selectedMember}
        />
      )}
    </div>
  );
};
export default FamilyTreePage;
