const LeaderboardSection = () => {
  return (
    <section className="h-screen bg-blue-100 px-2 py-1">
      <h2 className="h-12 bg-black text-white">LEADERBOARD</h2>

      <ul className="flex flex-col gap-2 p-4">
        <li className="grid grid-cols-12">
          <p className="col-span-2 bg-red-200">1.</p>
          <p className="col-span-5 bg-green-200">username</p>
          <p className="col-span-5 bg-blue-200">point</p>
        </li>
        <li className="grid grid-cols-12">
          <p className="col-span-2 bg-red-200">2.</p>
          <p className="col-span-5 bg-green-200">username</p>
          <p className="col-span-5 bg-blue-200">point</p>
        </li>
        <li className="grid grid-cols-12">
          <p className="col-span-2 bg-red-200">3.</p>
          <p className="col-span-5 bg-green-200">username</p>
          <p className="col-span-5 bg-blue-200">point</p>
        </li>
        <li className="grid grid-cols-12">
          <p className="col-span-2 bg-red-200">4.</p>
          <p className="col-span-5 bg-green-200">username</p>
          <p className="col-span-5 bg-blue-200">point</p>
        </li>
        <li className="grid grid-cols-12">
          <p className="col-span-2 bg-red-200">5.</p>
          <p className="col-span-5 bg-green-200">username</p>
          <p className="col-span-5 bg-blue-200">point</p>
        </li>
      </ul>
    </section>
  );
};

export default LeaderboardSection;
