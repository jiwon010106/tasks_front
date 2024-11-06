import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Completed from "./Completed";
import Important from "./Important";
import Proceeding from "./Proceeding";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Completed" element={<Completed />} />
          <Route path="/Important" element={<Important />} />
          <Route path="/Proceeding" element={<Proceeding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
