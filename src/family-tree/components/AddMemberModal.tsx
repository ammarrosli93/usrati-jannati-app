import { IoMdArrowRoundBack } from "react-icons/io";
import { Modal } from "../../ui/modal/Modal";
import React, { useEffect, useState } from "react";
import type { MemberData, MemberFormData } from "../../types/familyTree.type";

import { FaCloudArrowUp } from "react-icons/fa6";

type AddMemberProps = {
  onClose: () => void;
  onSubmit: (data: MemberFormData) => void;
  defaultValue?: MemberData | null;
  firstMember: boolean;
};

const currentFormMember = (member?: MemberData | null): MemberFormData => ({
  name: member?.name ?? "",
  date: member?.date ?? "",
  gender: member?.gender ?? "male",
  status: member?.status ?? "active",
  avatar: member?.avatar ?? "",
  location: member?.location ?? "",
});

export const AddMemberModal = ({
  onClose,
  onSubmit,
  defaultValue,
  firstMember,
}: AddMemberProps) => {
  const [currentMember, setCurrentMember] = useState<MemberFormData>(
    currentFormMember(defaultValue),
  );

  useEffect(() => {
    setCurrentMember(currentFormMember(defaultValue));
  }, [defaultValue]);

  const handleConvertUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/"))
      return console.log("Enter Valid File");

    const updateUrl = URL.createObjectURL(file);

    setCurrentMember((prev) => ({ ...prev, avatar: updateUrl }));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return onSubmit(currentMember);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setCurrentMember((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal>
      <div className="flex flex-col flex-wrap gap-5 font-plusjakartasans subpixel-antialiased text-sm w-sm">
        <div className=" flex flex-row justify-between">
          <p className=" text-base font-bold text-teal-700">
            Insert Family Details
          </p>
          <button type="button" title="Back Button" onClick={onClose}>
            <IoMdArrowRoundBack size={20} color="teal" />
          </button>
        </div>

        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col w-full justify-between gap-3 text-sm subpixel-antialiased "
        >
          <div className="flex flex-wrap flex-col gap-1 w-full">
            <label htmlFor="name" className="font-medium text-teal-800">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter full name"
              className="h-8 py-3 px-3 rounded-lg bg-black/10 align-middle"
              value={currentMember.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-wrap flex-col gap-1 w-full">
            <label htmlFor="location" className="font-medium text-teal-800">
              Origin
            </label>
            <input
              required
              id="location"
              name="location"
              type="text"
              placeholder="Enter place of origin"
              className="h-8 py-3 px-3 rounded-lg bg-black/10 align-middle"
              value={currentMember.location}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 items-center w-full">
            <div className="col-span-1 flex  flex-col flex-wrap gap-1 w-full">
              <label htmlFor="gender" className="font-medium text-teal-800">
                Gender
              </label>
              <select
                className="h-8 px-3 rounded-lg bg-black/10 align-middle"
                name="gender"
                value={currentMember.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="col-span-1 flex flex-col flex-wrap gap-1 w-full">
              <label htmlFor="gender" className="font-medium text-teal-800">
                Status
              </label>
              <select
                className="h-8 px-3 rounded-lg bg-black/10 align-middle"
                name="status"
                value={currentMember.status}
                onChange={handleChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap flex-col gap-1 w-full">
            <label htmlFor="dob" className="font-medium text-teal-800">
              Date of Birth{" "}
            </label>
            <input
              id="dob"
              type="date"
              title="date of birth"
              placeholder="Enter full name"
              className="h-8 py-3 px-3 rounded-lg bg-black/10 align-middle"
              name="date"
              value={currentMember.date}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-wrap flex-col gap-1">
            <p className="font-medium text-teal-800">Avatar</p>
            <label
              htmlFor="avatar"
              className="h-8 py-1.5 px-3 rounded-lg bg-black/10 items-center"
            >
              <div className="flex flex-row gap-2 items-center opacity-40">
                <FaCloudArrowUp />

                <p>Upload photo</p>
              </div>
              <input
                style={{ display: "none" }}
                type="file"
                name="avatar"
                id="avatar"
                onChange={handleConvertUrl}
              />
            </label>
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-2 mt-5">
            <button
              type="submit"
              className="col-span-1 rounded-lg w-m  px-4 py-2 mb-2 border text-yellow-300 hover:border-white/20 bg-teal-900 border-teal-700 hover:scale-105 "
            >
              {defaultValue ? "Update" : "Add"}
            </button>
            <button
              className="col-span-1 rounded-lg w-m  px-4 py-2 mb-2 border border-teal-700 text-teal-900 hover:bg-yellow-300 hover:text-teal-800 hover:shadow-md hover:border-white/20"
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
