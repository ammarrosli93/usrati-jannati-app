import type { MemberData } from "../../types/familyTree.type";
import { MemberNode } from "./MemberNode";

type TreeNodeProps = {
  memberId: string;
  member: Record<string, MemberData>;
  onAdd: (member: MemberData) => void;
  onEdit: (member: MemberData) => void;
  onRemove: (id: string) => void;
};

export const TreeNode = ({
  onAdd,
  onEdit,
  onRemove,
  member,
  memberId,
}: TreeNodeProps) => {
  const currentMember = member[memberId];
  const spouseData = member[currentMember.spouseId?.[0]];
  if (!currentMember) return null;

  return (
    <div className="flex flex-col items-center min-w-max">
      <div className=" flex flex-row gap-2 items-center">
        <MemberNode
          memberList={currentMember}
          add={onAdd}
          edit={onEdit}
          remove={onRemove}
        />
        {spouseData && (
          <MemberNode
            memberList={spouseData}
            add={onAdd}
            edit={onEdit}
            remove={onRemove}
          />
        )}
      </div>

      <div className=" flex flex-row items-start justify-center gap-2 mt-2 ">
        {currentMember.childrenId?.map((childId) => (
          <TreeNode
            key={childId}
            memberId={childId}
            member={member}
            onAdd={onAdd}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};
