import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Register } from "./views/RegisterPage";
import { IndexPage } from "./views/IndexPage";
import { LoginPage } from "./views/LoginPage";
import "./assets/style/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
