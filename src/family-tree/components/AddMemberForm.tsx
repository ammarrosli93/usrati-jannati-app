export const AddMemberForm = () => {
  return (
    <div className="flex flex-col p-8 gap-3 w-lg bg-white/70 backdrop-blur-3xl border-gray-900 rounded-xl  antialiased md:subpixel-antialiased">
      <p className="text-base font-semibold text-teal-700 font-outfit tracking-wide text-balance">
        Insert Family Details
      </p>
      <form className="flex flex-wrap flex-row w-full justify-between gap-y-3 font-normal text-sm font-outfit tracking-wide">
        <input
          type="text"
          placeholder="Name"
          className="h-10 py-3 px-5 rounded-full bg-teal-100 align-middle"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex flex-row justify-end items-center gap-2 h-10 py-3 px-5 rounded-full bg-teal-100">
          <p>D.O.B: </p>
          <input type="date" title="date of birth" />
        </div>

        <select
          title="relations list"
          value={relation?.value ?? ""}
          onChange={(e) => {
            const selected = relationList.find(
              (r) => r.value === e.target.value
            );
            setRelation(selected ?? null);
          }}
          className="flex justify-end items-center h-10 py-3 px-5 rounded-full bg-teal-100 align-middle"
        >
          <option value="">Relation</option>
          {relationList.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>

        <div className="flex flex-wrap flex-row items-center align-middle gap-2 h-10 py-3 px-5 rounded-full bg-teal-100 ">
          <p>Side:</p>
          <div className=" w-fit flex flex-row gap-2 align-middle">
            <span>Paternal</span>
            <input type="radio" name="side" checked placeholder="Paternal" />
          </div>
          <div className="flex flex-row gap-2 center">
            <span>Maternal</span>
            <input type="radio" name="side" id="" placeholder="maternal" />
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
  );
};
