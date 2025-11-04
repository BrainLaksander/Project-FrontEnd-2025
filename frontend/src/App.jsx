import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white text-black relative">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Brain/Fieken Project</h1>
        <nav className="space-x-4">
          <a href="#" className="text-purple-700 hover:underline">Home</a>
          <a href="#" className="text-purple-700 hover:underline">Menu</a>
          <a href="#" className="text-purple-700 hover:underline">Contact</a>
        </nav>
      </header>

      {/* Main Content (Tengah) */}
      <main className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-4">Home Sudah Ada!!</h2>
        <p className="mb-4">FrontEnd 2025</p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
          I&apos;m a Button
        </button>
      </main>

      {/* Footer */}
      <footer className="p-4 text-sm text-center text-black">
        STUDENT UNKLAB
      </footer>
    </div>
  );
}

export default App;
