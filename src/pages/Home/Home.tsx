import HomeLayout from '@/layouts/HomeLayout';
import ChatSection from './ChatSection';
import GameSection from './GameSection';
import LeaderboardSection from './LeaderboardSection';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { ValidMenu } from '@/store/nav/navSlice';

const Home = () => {
  const activeMenu = useSelector<RootState, ValidMenu>(
    (state) => state.nav.activeMenu,
  );

  return (
    <HomeLayout>
      <main className="h-full">
        <ChatSection className={activeMenu !== 'Chat' ? 'hidden' : ''} />

        <GameSection className={activeMenu !== 'Game' ? 'hidden' : ''} />

        <LeaderboardSection
          className={activeMenu !== 'Leaderboard' ? 'hidden' : ''}
        />
      </main>
    </HomeLayout>
  );
};

export default Home;
