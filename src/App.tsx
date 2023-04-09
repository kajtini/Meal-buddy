import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import { UserContext, UserContextProvider } from "./context/UserContext";
import HomePage from "./components/Home/HomePage";
import RedirectionRoute from "./Routes/RedirectionRoute";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import CategoryRecipes from "./components/Categories/CategoryMeals";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white font-primary">
      <UserContextProvider>
        <Routes>
          <Route element={<Header />}>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:id" element={<CategoryRecipes />} />
            </Route>
          </Route>

          <Route element={<RedirectionRoute />}>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
