import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import { Modal } from "../../ui/modal/Modal";

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

type AddMemberProps = {
  onClose: () => void;
};

export const AddMemberModal = ({ onClose }: AddMemberProps) => {
  const genderBaseColor: Record = { male: "#B19CD8", female: "#ffd400" };

  const generationShade: Record = {
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

  const [member, setMember] = useState([]);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState(null);

  const generationOrder: Generation[] = [
    "grandparent",
    "parent",
    "self",
    "sibling",
    "child",
  ];

  const addMember = () => {
    if (!name || !relation) return;

    const newMember: FamilyMember = { id: Date.now(), name, relation };

    setMember((prev) => [...prev, newMember]);
    setName("");
    setRelation(null);
  };
  const generationGroup: Record = {
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
    <Modal>
      <div className="flex flex-col gap-5 font-poppins subpixel-antialiased">
        <div className=" flex flex-row flex-wrap justify-between">
          <p className="text-base font-semibold text-teal-700">
            Insert Family Details
          </p>
          <button title="Back Button" onClick={onClose}>
            <IoMdArrowRoundBack size={20} color="teal" />
          </button>
        </div>

        <form className="flex flex-wrap flex-col w-full justify-between gap-4 font-base text-xs font-poppins subpixel-antialiased">
          <div className="flex flex-wrap flex-col gap-1">
            <p className="font-base">Name</p>
            <input
              type="text"
              placeholder="Enter full name"
              className="h-8 py-3 px-3 rounded-xl bg-black/10 align-middle"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 items-center justify-between">
            <div className="flex flex-wrap flex-col gap-1">
              <p>Relation</p>
              <select
                title="relations list"
                value={relation?.value ?? ""}
                onChange={(e) => {
                  const selected = relationList.find(
                    (r) => r.value === e.target.value,
                  );
                  setRelation(selected ?? null);
                }}
                className="h-8 px-2 rounded-xl bg-black/10 align-middle"
              >
                <option value="" className="content-center">
                  Select Relation
                </option>
                {relationList.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-wrap flex-col gap-1">
              <p>Side</p>
              <div className="flex flex-wrap flex-row justify-start gap-5">
                <div className=" w-fit flex flex-row gap-2 align-middle">
                  <span>Paternal</span>
                  <input
                    type="radio"
                    name="side"
                    checked
                    placeholder="Paternal"
                  />
                </div>
                <div className="flex flex-row gap-2 center">
                  <span>Maternal</span>
                  <input
                    type="radio"
                    name="side"
                    id=""
                    placeholder="maternal"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center justify-between">
            <div className="flex flex-wrap flex-col gap-1">
              <p>Status</p>
              <div className="flex flex-wrap flex-row justify-start gap-5">
                <div className=" w-fit flex flex-row gap-2 align-middle">
                  <span>Active</span>
                  <input
                    type="radio"
                    name="side"
                    checked
                    placeholder="Paternal"
                  />
                </div>
                <div className="flex flex-row gap-2 center">
                  <span>Inactive</span>
                  <input
                    type="radio"
                    name="side"
                    id=""
                    placeholder="maternal"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap flex-col gap-1">
              <p>Date of Birth </p>
              <input
                type="date"
                title="date of birth"
                placeholder="Enter full name"
                className="h-8 py-3 px-3 rounded-xl bg-black/10 align-middle"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <input
            type="submit"
            className=" rounded-2xl w-m  px-4 py-2 mb-2 text-amber-900 hover:bg-amber-800 hover:text-amber-100"
            onClick={addMember}
            placeholder="Add Member"
          />
        </form>
      </div>
    </Modal>
  );
};
