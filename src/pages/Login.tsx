import AuthLayout from '@/components/layouts/AuthLayout';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <AuthLayout>
      <main className="grid h-[40rem] w-[80rem] grid-cols-2 bg-white">
        <section>Empty</section>
        <section className="bg-red-100 p-20">
          <h1 className="mb-8 text-4xl">Login</h1>

          <form className="mb-8">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="mb-4 block w-full rounded-lg px-4 py-2"
              name="username"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="mb-4 block w-full rounded-lg px-4 py-2"
              name="password"
            />

            <input
              type="submit"
              value="Sign In"
              className="block w-full rounded-lg bg-blue-200 px-4 py-2"
            />
          </form>

          <p>
            Don&apos;t have an account?
            <Link to={'/register'} className="text-blue-400">
              Register here
            </Link>
          </p>
        </section>
      </main>
    </AuthLayout>
  );
};

export default Login;
