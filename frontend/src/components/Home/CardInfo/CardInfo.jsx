function CardInfo({ name, generation }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-200">
      <h3 className="font-bold text-lg text-blue-600">{name}</h3>
      <p className="text-gray-500">{generation}</p>
    </div>
  );
}

export default CardInfo;
