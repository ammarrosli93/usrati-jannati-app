import type { MemberData } from "../../types/familyTree.type";
import { TreeNode } from "./TreeNode";

type MemberProps = {
  members: MemberData[];
  onAddMember: (member: MemberData) => void;
  onEditMember: (member: MemberData) => void;
  onRemoveMember: (id: string) => void;
};

export const TreeCanvas = ({
  members,
  onAddMember,
  onEditMember,
  onRemoveMember,
}: MemberProps) => {
  const member = members.reduce((acc, m) => {
    acc[m.id] = m;
    return acc;
  }, {}) as Record<string, MemberData>;

  const potentialRoots = members.filter((m) => m.parentId.length === 0);
  const root = potentialRoots.filter((m) => {
    if (m.spouseId && m.spouseId.length > 0) {
      const spouseId = m.spouseId[0];
      const isSpouseRoot = potentialRoots.some((r) => r.id === spouseId);
      if (isSpouseRoot && m.gender === "female") {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="w-full min-w-max h-full ">
      <div className="justify-center items-start gap-2 flex flex-row">
        {root.map((r) => (
          <TreeNode
            key={r.id}
            memberId={r.id}
            member={member}
            onAdd={onAddMember}
            onEdit={onEditMember}
            onRemove={onRemoveMember}
          />
        ))}
      </div>
    </div>
  );
};
