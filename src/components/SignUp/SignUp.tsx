import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const { user, logIn } = useContext(UserContext);

  const canSignUp = email && password && name;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handlePhotoURLChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhotoURL(e.target.value);

  const signUp = async () => {
    try {
      if (canSignUp) {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (user) {
          await updateProfile(user.user, {
            photoURL: photoURL || "https://i.stack.imgur.com/34AD2.jpg",
            displayName: name,
          });

          const { displayName, email, photoURL: _photoURL, uid } = user.user;

          if (displayName && email && _photoURL) {
            logIn({
              email,
              displayName,
              photoURL: _photoURL,
              uid,
            });
          }

          setEmail("");
          setPassword("");
          setName("");
          setPhotoURL("");
        }
      }
    } catch (error) {
      console.error(`Error while signing up: ${error}`);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp();
  };

  return (
    <form
      className="max-w-xs sm:max-w-md flex flex-col gap-5 w-full"
      onSubmit={handleFormSubmit}
    >
      <div>
        <h2 className="text-4xl mb-3">Welcome to the meal buddy</h2>
        <p className="opacity-50">
          Welcome! Please enter your details in order to sign up.
        </p>
      </div>

      <div>
        <label htmlFor="photoURL">Photo url (optional)</label>
        <input
          className="w-full bg-secondary p-3 rounded-md focus:outline-none"
          type="text"
          placeholder="Enter your photo url"
          id="photoURL"
          value={photoURL}
          onChange={handlePhotoURLChange}
        />
      </div>

      <div>
        <label htmlFor="name">Name</label>
        <input
          className="w-full bg-secondary p-3 rounded-md focus:outline-none"
          type="text"
          placeholder="Enter your name"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
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

      <button className="bg-accent w-full py-3 rounded-md ">Sign up</button>
      <button className="border-secondary border-solid border-[1px] w-full py-3 rounded-md flex items-center justify-center gap-2">
        <FcGoogle size={25} />
        Sign up with google
      </button>

      <p className="text-center">
        Already have an account?{" "}
        <Link to="/signIn" className="text-accent">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
