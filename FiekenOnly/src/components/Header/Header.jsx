function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">☕ Kopi Kenangan</h1>
      <nav className="space-x-6 text-gray-700">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">Menu</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
