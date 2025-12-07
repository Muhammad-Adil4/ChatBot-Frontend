import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import { MainLayout } from "./pages/Layout";
import { ChatPage } from "./pages/ChatPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route element={< MainLayout/>}>
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
