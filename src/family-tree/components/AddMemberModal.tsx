import { IoMdArrowRoundBack } from "react-icons/io";
import { Modal } from "../../ui/modal/Modal";
import type { FormEvent } from "react";
import React, { useEffect, useState } from "react";
import type { MemberData, MemberFormData } from "../../types/familyTree.type";

type AddMemberProps = {
  onClose: () => void;
  onSubmit: (data: MemberFormData) => void;
  defaultValue?: MemberData | null;
  firstMember: boolean;
};

const currentFormMember = (member?: MemberData | null): MemberFormData => ({
  name: member?.name ?? "",
  relation: member?.relation ?? "",
  date: member?.date ?? "",
  gender: member?.gender ?? "",
  status: member?.status ?? "",
  avatar: member?.avatar ?? "",
});

export const AddMemberModal = ({
  onClose,
  onSubmit,
  defaultValue,
  firstMember,
}: AddMemberProps) => {
  const [currentMember, setcurrentMember] = useState<MemberFormData>(
    currentFormMember(defaultValue),
  );

  useEffect(() => {
    setcurrentMember(currentFormMember(defaultValue));
  }, [defaultValue]);

  const handleConvertUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/"))
      return console.log("Enter Valid File");

    const updateUrl = URL.createObjectURL(file);

    setcurrentMember((prev) => ({ ...prev, avatar: updateUrl }));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return onSubmit(currentMember);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setcurrentMember((prev) => ({ ...prev, [name]: value }));
  };

  console.log("currentMember", currentMember);
  return (
    <Modal>
      <div className="flex flex-col gap-5 font-poppins subpixel-antialiased">
        <div className=" flex flex-row flex-wrap justify-between">
          <p className="text-base font-semibold text-teal-700">
            Insert Family Details
          </p>
          <button type="button" title="Back Button" onClick={onClose}>
            <IoMdArrowRoundBack size={20} color="teal" />
          </button>
        </div>

        <form
          onSubmit={handleOnSubmit}
          className="flex flex-wrap flex-col w-full justify-between gap-3 font-base text-xs font-poppins subpixel-antialiased"
        >
          <div className="flex flex-wrap flex-col gap-1">
            <label htmlFor="name" className="font-base">
              Name
            </label>
            <input
              name="name"
              required
              id="name"
              type="text"
              placeholder="Enter full name"
              className="h-8 py-3 px-3 rounded-xl bg-black/10 align-middle"
              value={currentMember.name}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 items-center justify-between">
            <div className="flex flex-wrap flex-col gap-1">
              <label htmlFor="relation">Relation</label>
              <select
                name="relation"
                required
                id="relation"
                title="relations list"
                className="h-8 px-2 rounded-xl bg-black/10 align-middle"
                value={currentMember.relation}
                onChange={handleChange}
                disabled={firstMember}
              >
                <option value="parent" className="content-center">
                  Parent
                </option>
                <option value="sibling" className="content-center">
                  Sibling
                </option>
                <option value="child" className="content-center">
                  Child
                </option>
                <option value="spouse" className="content-center">
                  Spouse
                </option>
              </select>
            </div>
            <div className="flex flex-wrap flex-col gap-1">
              <label htmlFor="gender">Gender</label>
              <div
                id="gender"
                className="flex flex-wrap flex-row justify-start gap-5"
              >
                <div className=" w-fit flex flex-row gap-2 align-middle">
                  <span>Male</span>
                  <input
                    type="radio"
                    name="gender"
                    checked={currentMember.gender === "male"}
                    placeholder="Paternal"
                    value={"male"}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row gap-2 center">
                  <span>Female</span>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    placeholder="maternal"
                    value={"female"}
                    checked={currentMember.gender === "female"}
                    onChange={handleChange}
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
                    name="status"
                    checked={currentMember.status === "active"}
                    placeholder="Active"
                    value={"active"}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row gap-2 center">
                  <span>Inactive</span>
                  <input
                    type="radio"
                    name="status"
                    id=""
                    placeholder="Inactive"
                    value={"inactive"}
                    checked={currentMember.status === "inactive"}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap flex-col gap-1">
              <label htmlFor="dob">Date of Birth </label>
              <input
                id="dob"
                type="date"
                title="date of birth"
                placeholder="Enter full name"
                className="h-8 py-3 px-3 rounded-xl bg-black/10 align-middle"
                name="date"
                value={currentMember.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap flex-col gap-1 w-fit">
            <label htmlFor="avatar">Avatar</label>
            <input
              className="h-8 py-2 px-3 rounded-xl bg-black/10 align-middle w-"
              type="file"
              name="avatar"
              id="avatar"
              onChange={handleConvertUrl}
            />
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3 mt-5">
            <button
              type="submit"
              className=" rounded-full w-m  px-4 py-2 mb-2 border text-yellow-300 hover:border-white/20 bg-teal-900 border-teal-700 hover:scale-105 "
            >
              {defaultValue ? "Update" : "Add"}
            </button>
            <button
              className="rounded-full w-m  px-4 py-2 mb-2 border border-teal-700 text-teal-900 hover:bg-yellow-300 hover:text-teal-800 hover:shadow-md hover:border-white/20"
              onClick={onClose}
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
