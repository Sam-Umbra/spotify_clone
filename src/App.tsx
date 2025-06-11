import LeftAside from "./layout/leftAside/LeftAside";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProviderContext } from "./context/ProviderContext";

function App() {
  return (
    <BrowserRouter>
      <ProviderContext>
        <Routes>
          <Route path="/" element={<LeftAside />} />
        </Routes>
      </ProviderContext>
    </BrowserRouter>
  );
}

export default App;
