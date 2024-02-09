import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import NavItem from './NavMenu.NavItem';

interface NavMenuProps {
  className?: string;
}

const NavMenu: FC<NavMenuProps> = ({ className }) => {
  return (
    <nav className={twMerge('bg-white', className)}>
      <ul className="flex h-full">
        <NavItem menuName="Chat" />
        <NavItem menuName="Game" />
        <NavItem menuName="Leaderboard" />
      </ul>
    </nav>
  );
};

export default NavMenu;
