import { AppDispatch, RootState } from '@/store';
import { ValidMenu, setActiveMenu } from '@/store/nav/navSlice';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

interface NavItemProps {
  menuName: ValidMenu;
}

const NavItem: FC<NavItemProps> = ({ menuName }) => {
  const dispatch = useDispatch<AppDispatch>();
  const activeMenu = useSelector<RootState>((state) => state.nav.activeMenu);

  const handleClick = () => {
    dispatch(setActiveMenu(menuName));
  };

  const isActiveMenu = menuName === activeMenu;

  return (
    <li
      className={twMerge(
        'grid flex-1 cursor-pointer place-content-center bg-red-100',
        isActiveMenu ? 'border-4 border-blue-500' : '',
      )}
      onClick={() => handleClick()}
    >
      {menuName}
    </li>
  );
};

export default NavItem;
