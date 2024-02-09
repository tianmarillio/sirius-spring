import ChatSection from './ChatSection';
import GameSection from './GameSection';
import LeaderboardSection from './LeaderboardSection';

const Home = () => {
  return (
    <main className="container mx-auto h-screen">
      <ChatSection />

      <GameSection />

      <LeaderboardSection />
    </main>
  );
};

export default Home;
