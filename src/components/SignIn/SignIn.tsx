import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword, signInWithEmailLink } from "firebase/auth";
import { auth } from "../../config/firebase";
import { UserContext } from "../../context/UserContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn } = useContext(UserContext);

  const canSignIn = email && password;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const signIn = async () => {
    try {
      if (canSignIn) {
        const user = await signInWithEmailAndPassword(auth, email, password);

        if (user) {
          const { displayName, email, photoURL, uid } = user.user;

          if (displayName && email && photoURL && uid) {
            logIn({ displayName, email, photoURL, uid });
          }

          setEmail("");
          setPassword("");
        }
      }
    } catch (err) {
      console.error(`Error while signing in ${err}`);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn();
  };

  return (
    <form
      className="max-w-xs sm:max-w-md flex flex-col gap-5 w-full"
      onSubmit={handleFormSubmit}
    >
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
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          className="w-full bg-secondary p-3 rounded-md focus:outline-none"
          type="Password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          id="password"
          value={password}
          onChange={handlePasswordChange}
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
