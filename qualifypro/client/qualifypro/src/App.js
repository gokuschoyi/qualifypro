import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from './pages/landing_page/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
