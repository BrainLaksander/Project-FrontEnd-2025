// Header/Generations/Generations.jsx
function Generations({ setGeneration }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-semibold text-lg">Generations</h2>
      <div className="flex gap-2 mt-2">
        {["Gen 1", "Gen 2", "Gen 3", "Gen 4"].map((gen) => (
          <button
            key={gen}
            onClick={() => setGeneration(gen)}
            className="px-3 py-1 bg-blue-200 hover:bg-blue-300 rounded"
          >
            {gen}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Generations;
