import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white font-primary">
      <UserContextProvider>
        <Routes>
          <Route element={<ProtectedRoutes />}></Route>

          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
