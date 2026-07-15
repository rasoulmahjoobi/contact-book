function SortSelect({ sort, setSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="border rounded-lg px-4 py-3 bg-white cursor-pointer"
    >
      <option value="">Sort</option>
      <option value="asc">A - Z</option>
      <option value="desc">Z - A</option>
    </select>
  );
}

export default SortSelect;