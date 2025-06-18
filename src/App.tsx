import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProviderContext } from "./context/ProviderContext";
import Home from "./pages/home/Home";
import Mix from "./pages/mix/Mix";
import Search from "./pages/search/Search";
import Library from "./pages/library/Library";

function App() {
  return (
    <BrowserRouter>
      <ProviderContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mix" element={<Mix />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </ProviderContext>
    </BrowserRouter>
  );
}

export default App;
