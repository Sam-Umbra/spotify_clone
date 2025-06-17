import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProviderContext } from "./context/ProviderContext";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <ProviderContext>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ProviderContext>
    </BrowserRouter>
  );
}

export default App;
