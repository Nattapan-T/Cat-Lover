import { useState } from "react";
import "./App.css";
import LoginForm from "./LoginComponent";
import CatDisplay from "./FetchingCatImage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="center">Cat Lover</h1>
        <h3 className="center">The cat that got the cream</h3>
        {loggedIn ? (
          <CatDisplay onLogout={handleLogout} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </header>
    </div>
  );
}
export default App;
