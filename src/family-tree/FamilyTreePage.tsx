import { useState } from "react";
import { EmptyState } from "./components/EmptyState";
import { AddMemberModal } from "./components/AddMemberModal";
import { TreeCanvas } from "./components/TreeCanvas";
import type {
  MemberData,
  MemberFormData,
  RelationType,
} from "../types/familyTree.type";

const getPlaceholder = (gender: "male" | "female" | undefined) => {
  if (gender === "male") return "/avatars/male.png";
  else return "/avatars/female.png";
};

const FamilyTreePage = () => {
  const [isMemberModalOpen, setAddMemberModalOpen] = useState(false);
  const [members, setMembers] = useState<MemberData[]>([]);
  const [selectedMember, setSelectedMember] = useState<MemberData | null>(null);
  const [clickMember, setClickMember] = useState<MemberData | null>(null);
  const [relation, setRelation] = useState<RelationType | undefined>(undefined);

  console.log(members);
  const handleOpen = (member: MemberData, relation: RelationType) => {
    if (member) {
      setClickMember(member);
    }
    setRelation(relation);
    setAddMemberModalOpen(true);
  };

  const handleClose = () => {
    setClickMember(null);
    setAddMemberModalOpen(false);
    setSelectedMember(null);
    setRelation(undefined);
  };

  const handleFormSubmit = (formData: MemberFormData) => {
    if (selectedMember === null) {
      // Add new member from empty state or add new member with relation
      const newMemberId = crypto.randomUUID();
      const targetId = clickMember?.id;
      // Construct new member data based on relation type
      const member: MemberData = {
        id: newMemberId,
        ...formData,
        avatar: formData.avatar || getPlaceholder(formData.gender),
        parentIds: [],
        spouseIds: [],
        childrenIds: [],
        siblingIds: [],
      };

      if (relation === "parent" && targetId) {
        member.childrenIds = [targetId];
      }
      if (relation === "child" && targetId) {
        member.parentIds = [targetId];
      }
      if (relation === "spouse" && targetId) {
        member.spouseIds = [targetId];
      }
      if (relation === "sibling" && targetId) {
        member.siblingIds = [targetId];
      }

      setMembers((prev) => {
        const updatedPrev = prev.map((m) => {
          if (m.id === targetId) {
            return {
              ...m,

              parentIds:
                relation === "child"
                  ? [...m.parentIds, newMemberId]
                  : m.parentIds,
              childrenIds:
                relation === "parent"
                  ? [...m.childrenIds, newMemberId]
                  : m.childrenIds,
              spouseIds:
                relation === "spouse"
                  ? [...m.spouseIds, newMemberId]
                  : m.spouseIds,
              siblingIds:
                relation === "sibling"
                  ? [...m.siblingIds, newMemberId]
                  : m.siblingIds,
            };
          }
          return m;
        });
        const finalList = [...updatedPrev, member];

        return finalList;
      });
    } else {
      // Edit existing member
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
