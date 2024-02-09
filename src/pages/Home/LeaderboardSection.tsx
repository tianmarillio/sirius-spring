import { RootState } from '@/store';
import { LeaderboardUser } from '@/store/leaderboard/leaderboardSlice';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

interface LeaderboardSectionProps {
  className?: string;
}

const LeaderboardSection: FC<LeaderboardSectionProps> = ({ className }) => {
  const leaderboardUsers = useSelector<RootState, LeaderboardUser[]>(
    (state) => state.leaderboard.leaderboardUsers,
  );

  return (
    <section className={twMerge('flex h-full flex-col bg-blue-500', className)}>
      <h2 className="h-12 bg-black text-white">LEADERBOARD</h2>

      <ul className="flex flex-1 flex-col gap-2 overflow-scroll">
        {leaderboardUsers.map((leaderboardUser, i) => (
          <li key={i} className="grid grid-cols-12 bg-sky-200">
            <p className="col-span-2 bg-red-200 px-1 py-2">1.</p>
            <p className="col-span-6 px-1 py-2">{leaderboardUser.username}</p>
            <p className="col-span-4 px-1 py-2">{leaderboardUser.point}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LeaderboardSection;
