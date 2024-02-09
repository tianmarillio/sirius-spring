import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div className="grid h-screen w-screen place-content-center items-center bg-slate-300">
      {children}
    </div>
  );
};

export default AuthLayout;
