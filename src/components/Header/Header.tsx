import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { signOut as _signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
export interface Page {
  id: number;
  title: string;
  path: string;
}

const Header = () => {
  const { user, logOut } = useContext(UserContext);

  const pages: Page[] = [
    {
      id: 0,
      title: "Home",
      path: "/",
    },
    {
      id: 1,
      title: "Categories",
      path: "/categories",
    },
    {
      id: 2,
      title: "Recipes",
      path: "/recipes",
    },
  ];

  const signOut = async () => {
    try {
      await _signOut(auth);
      logOut();
    } catch (err) {
      console.error(`Error while signing out ${err}`);
    }
  };

  return (
    <>
      <header className="p-5 bg-secondary w-full">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 sm:gap-10">
            <h2 className="text-xl">Meal Buddy</h2>

            <ul className=" flex items-center gap-5">
              {pages.map((page) => (
                <li key={page.id}>
                  <NavLink
                    to={page.path}
                    style={({ isActive }) => ({
                      borderBottom: isActive ? "solid 2px #F54749" : "none",
                      paddingBottom: isActive ? ".2rem" : "none",
                    })}
                  >
                    {page.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="bg-gradient-to-b from-accent to-accent-dark py-2 px-6 rounded-full"
              onClick={signOut}
            >
              Log Out
            </button>
            <img
              className="max-h-9 rounded-full"
              src={user?.photoURL}
              alt="user image"
            />
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
