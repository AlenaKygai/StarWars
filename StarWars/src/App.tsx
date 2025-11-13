import "./App.css";
import CharactersList from "./components/CharactersList/CharactersList";
import Header from "./components/Header/Header";

// App component - root component of the application
function App() {
  return (
    <div>
      {/* Header component with Star Wars logo */}
      <Header />
      {/* Main content: list of characters with pagination */}
      <CharactersList />
    </div>
  );
}

export default App;
