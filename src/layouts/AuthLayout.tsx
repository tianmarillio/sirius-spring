import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="grid h-screen w-screen place-content-center items-center bg-slate-300">
      {children}
    </div>
  );
};

export default AuthLayout;
