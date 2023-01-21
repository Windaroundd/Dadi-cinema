import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FullLayout from "./HOC/FullLayout.js/FullLayout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FullLayout>
                <Home />
              </FullLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
