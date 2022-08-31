import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage";
import UploadPage from "./Pages/UploadPage";
/*
 *Click handler becomes the link handler
 *get axios for getting the json from heroku
 *useEffect() needs to surround the axios
 *only run once empty array '[]' after useEffect()
 *there needs to be the use of the id  in the url and use that info to get the rest of the
 *info from the other json file with all the details
 *when the form submits you need to go back to the home page
 */

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
