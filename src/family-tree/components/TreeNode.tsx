import type { MemberData, RelationType } from "../../types/familyTree.type";
import { MemberNode } from "./MemberNode";

type TreeNodeProps = {
  memberId: string;
  members: MemberData[];
  member: MemberData;
  onAdd: (member: MemberData, relation: RelationType) => void;
  onEdit: (member: MemberData) => void;
  onRemove: (id: string) => void;
};

export const TreeNode = ({
  onAdd,
  onEdit,
  onRemove,
  member,
  members,
  memberId,
}: TreeNodeProps) => {
  const firstMember = member;

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
        {currentMember.childrenIds?.map((childId) => (
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
