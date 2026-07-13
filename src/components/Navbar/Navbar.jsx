function Navbar() {
  return (
    <nav className="bg-indigo-600 shadow">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">
          📒 Contact Book
        </h1>

        <span className="text-indigo-100">
          Manage Your Contacts
        </span>
      </div>
    </nav>
  );
}

export default Navbar;