import AuthLayout from '@/components/layouts/AuthLayout';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <AuthLayout>
      <main className="grid h-[40rem] w-[80rem] grid-cols-2 bg-white">
        <section className="bg-red-100 p-20 md:bg-black">
          <h1 className="mb-8 text-4xl">Register</h1>

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
              value="Sign Up"
              className="block w-full rounded-lg bg-blue-200 px-4 py-2"
            />
          </form>

          <p>
            Have an account?
            <Link to={'/login'} className="text-blue-400">
              Login here
            </Link>
          </p>
        </section>
        <section>Empty</section>
      </main>
    </AuthLayout>
  );
};

export default Register;
