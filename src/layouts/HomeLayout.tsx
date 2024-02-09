import NavMenu from '@/components/NavMenu';
import { FC, ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto h-screen">
      <div className="h-[calc(100%-3rem)] bg-black">{children}</div>

      <NavMenu className="h-12 bg-indigo-400" />
    </div>
  );
};

export default HomeLayout;
