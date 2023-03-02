import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from './pages/landing_page/LandingPage';
import CourseDetails from './pages/course_details/CourseDetails';
import { PrivacyPolicy, TermsAndConditions, Refund } from './pages'
import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from "./theme/typography";

function App() {
  const theme = createTheme({
    typography: Typography(`'Montserrat', sans-serif`),
  })
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='/courses/:courseId' element={<CourseDetails />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
            <Route path='/refund-policy' element={<Refund />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
