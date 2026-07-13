import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="relative w-full">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search contact..."
        className="w-full border rounded-lg py-3 pl-12 pr-4 outline-none focus:border-indigo-500"
      />
    </div>
  );
}

export default SearchBar;
