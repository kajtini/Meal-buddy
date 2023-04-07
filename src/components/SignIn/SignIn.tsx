import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <form className="max-w-xs sm:max-w-md flex flex-col gap-5 w-full">
      <div>
        <h2 className="text-4xl mb-3">Welcome back</h2>
        <p className="opacity-50">
          Welcome back! Please provide your details in order to sign in.
        </p>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          className="w-full bg-secondary p-3 rounded-md focus:outline-none"
          type="text"
          placeholder="Enter your email"
          id="email"
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          className="w-full bg-secondary p-3 rounded-md focus:outline-none"
          type="Password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          id="password"
        />
      </div>

      <button className="bg-accent w-full py-3 rounded-md">Sign in</button>
      <button className="border-secondary border-solid border-[1px] w-full py-3 rounded-md flex items-center justify-center gap-2">
        <FcGoogle size={25} />
        Sign in with google
      </button>

      <p className="text-center">
        Don't have an account?{" "}
        <Link to="/signUp" className="text-accent">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
