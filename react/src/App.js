import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage";
import UploadPage from "./Pages/UploadPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage/:videoId" element={<HomePage />} />
        <Route path="/uploadPage" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
