import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DailyWord from "./pages/DailyWord";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-word/:day" element={<DailyWord />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
