import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import CharactersList from "./components/CharactersList/CharactersList";
import CharacterPage from "./components/CharacterPage/CharacterPage";

// App component - root component of the application
function App() {
  return (
    <div>
      {/* Header component with Star Wars logo */}
      <Header />
      {/* Main content with routing */}
      <Routes>
        <Route path="/" element={<CharactersList />} />
        {/* If /character without id -> redirect to list */}
        <Route path="/character" element={<Navigate to="/" replace />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </div>
  );
}

export default App;
