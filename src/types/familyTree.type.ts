export type RelationType = "parent" | "child" | "spouse" | "sibling";

export type MemberFormData = {
  name: string;
  relation?: RelationType;
  date: string;
  gender: "male" | "female";
  status: "active" | "inactive";
  avatar: string;
};

export type MemberData = MemberFormData & {
  id: string;
  parentId: string[];
  spouseId: string[];
  childrenId: string[];
  siblingId: string[];
};
