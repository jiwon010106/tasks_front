import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Completed from "./Completed";
import Important from "./Important";
import Proceeding from "./Proceeding";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// test 9

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

        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
