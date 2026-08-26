import type { MemberData, RelationType } from "../../types/familyTree.type";
import { TreeNode } from "./TreeNode";

type MemberProps = {
  members: MemberData[];
  onAddMember: (member: MemberData, relation: RelationType) => void;
  onEditMember: (member: MemberData) => void;
  onRemoveMember: (id: string) => void;
};

export const TreeCanvas = ({
  members,
  onAddMember,
  onEditMember,
  onRemoveMember,
}: MemberProps) => {
  const root = members[0];
  
  if (!root) {
    return null;
  }

  return (
    <div className="w-full min-w-max h-full ">
      <div className="justify-center items-start gap-2 flex flex-row">
        <TreeNode
          key={root.id}
          memberId={root.id}
          member={root}
          members={members}
          onAdd={onAddMember}
          onEdit={onEditMember}
          onRemove={onRemoveMember}
        />
      </div>
    </div>
  );
};
