export type RelationType = "parent" | "child" | "spouse" | "sibling";

export type MemberFormData = {
  name: string;
  date: string;
  gender: "male" | "female" | undefined;
  status: "active" | "inactive" | undefined;
  avatar: string;
  location: string;
  relation?: RelationType;
};

export type MemberData = MemberFormData & {
  id: string;
  parentIds: string[];
  spouseIds: string[];
  childrenIds: string[];
  siblingIds: string[];
};
