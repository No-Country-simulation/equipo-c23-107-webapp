import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RecetaPage from "./pages/RecetaPage";
import FeedPage from "./pages/FeedPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecipePreview from "./pages/RecipePreview";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<HomePage />} />

        {/* Autenticación */}

        {/* Usuario autenticado */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-recipe" element={<RecetaPage />} />
        <Route path="/vista-previa" element={<RecipePreview />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
