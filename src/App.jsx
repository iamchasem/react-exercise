import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import { ListPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
