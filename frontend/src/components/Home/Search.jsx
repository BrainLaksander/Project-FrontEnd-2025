function Search({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Cari kopi..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
    />
  );
}

export default Search;
