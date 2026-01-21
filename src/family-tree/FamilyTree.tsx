import { useState } from "react";
import { AddMemberForm } from "./components/AddMemberForm";

type Gender = "male" | "female";
type Generation = "grandparent" | "parent" | "self" | "sibling" | "child";

interface RelationConfig {
  label: string;
  value: string;
  gender: Gender;
  generation: Generation;
  seniority: number;
}

const relationList: RelationConfig[] = [
  {
    label: "Grandfather",
    value: "grandfather",
    gender: "male",
    generation: "grandparent",
    seniority: 1,
  },
  {
    label: "Grandmother",
    value: "grandmother",
    gender: "female",
    generation: "grandparent",
    seniority: 2,
  },
  {
    label: "Father",
    value: "father",
    gender: "male",
    generation: "parent",
    seniority: 3,
  },
  {
    label: "Mother",
    value: "mother",
    gender: "female",
    generation: "parent",
    seniority: 4,
  },
  {
    label: "Uncle",
    value: "uncle",
    gender: "male",
    generation: "parent",
    seniority: 5,
  },
  {
    label: "Aunt",
    value: "aunt",
    gender: "female",
    generation: "parent",
    seniority: 6,
  },
  {
    label: "Brother",
    value: "brother",
    gender: "male",
    generation: "sibling",
    seniority: 7,
  },
  {
    label: "Sister",
    value: "sister",
    gender: "female",
    generation: "sibling",
    seniority: 8,
  },
  {
    label: "Young Brother",
    value: "young brother",
    gender: "male",
    generation: "sibling",
    seniority: 9,
  },
  {
    label: "Young Sister",
    value: "young sister",
    gender: "female",
    generation: "sibling",
    seniority: 10,
  },
  {
    label: "Son",
    value: "son",
    gender: "male",
    generation: "child",
    seniority: 11,
  },
  {
    label: "Daughter",
    value: "daughter",
    gender: "female",
    generation: "child",
    seniority: 12,
  },
  {
    label: "Self",
    value: "daughter",
    gender: "female",
    generation: "child",
    seniority: 12,
  },
];

interface FamilyMember {
  id: number;
  name: string;
  relation: RelationConfig;
}

const genderBaseColor: Record<Gender, string> = {
  male: "#B19CD8",
  female: "#ffd400",
};

const generationShade: Record<Generation, number> = {
  grandparent: 0.99,
  parent: 0.8,
  self: 0.7,
  sibling: 0.6,
  child: 0.5,
};

const getMemberColor = (relation: RelationConfig) => {
  const base = genderBaseColor[relation.gender];
  const brightness = generationShade[relation.generation];
  return `color-mix(in srgb, ${base} ${brightness * 100}%, white)`;
};

const FamilyTree = () => {
  const [member, setMember] = useState<FamilyMember[]>([]);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState<RelationConfig | null>(null);
  const generationOrder: Generation[] = [
    "grandparent",
    "parent",
    "self",
    "sibling",
    "child",
  ];
  const addMember = () => {
    if (!name || !relation) return;

    const newMember: FamilyMember = {
      id: Date.now(),
      name,
      relation,
    };

    setMember((prev) => [...prev, newMember]);

    setName("");
    setRelation(null);
  };
  const generationGroup: Record<Generation, FamilyMember[]> = {
    grandparent: [],
    parent: [],
    sibling: [],
    child: [],
    self: [],
  };

  member.forEach((m) => {
    generationGroup[m.relation.generation].push(m);
  });

  return (
    <div className="flex flex-wrap flex-col justify-center items-center align-middle p-5 text-black gap-y-5">
      <h1 className="text-4xl font-bold text-blue-900">
        Family Tree Generator
      </h1>

      {/*Show all family members */}
      <AddMemberForm />
      <div className="flex flex-col gap-y-5 mt-4">
        {generationOrder.map(
          (generation) =>
            generationGroup[generation].length > 0 && (
              <div
                className="flex gap-2 rounded-xl  justify-center align-middle h-fit"
                key={generation}
              >
                {generationGroup[generation].map((member) => (
                  <span
                    className="flex flex-row border-none p-2 m-2 rounded-xl"
                    key={member.id}
                    style={{ backgroundColor: getMemberColor(member.relation) }}
                  >
                    {member.name}, {member.relation.label}
                  </span>
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default FamilyTree;
