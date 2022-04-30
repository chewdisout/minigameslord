import "./styles/main.scss";
import GameModeMenu from "./route/GameModeMenu/GameModeMenu.component";
import LocalGameLoginMenu from "./route/LocalGameLoginMenu/LocalGameLoginMenu.component";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const connect = () => {
    const socket = io("http://localhost:5000");
  }

  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<GameModeMenu />}/>
          <Route path="/localgame" element={<LocalGameLoginMenu />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
