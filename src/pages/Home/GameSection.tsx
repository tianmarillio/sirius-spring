const GameSection = () => {
  return (
    <section className="h-screen overflow-scroll bg-green-100 pt-10">
      <p className="mb-8 bg-blue-200 px-6 py-2 text-xl">
        Question: <br /> Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Porro perferendis quaerat assumenda!
      </p>

      <ul className="flex flex-col justify-center gap-8 bg-red-200 px-6 text-lg">
        <li className="bg-blue-100">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          voluptatum?
        </li>
        <li className="bg-blue-100">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          voluptatum?
        </li>
        <li className="bg-blue-100">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          voluptatum?
        </li>
        <li className="bg-blue-100">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          voluptatum?
        </li>
      </ul>
    </section>
  );
};

export default GameSection;
