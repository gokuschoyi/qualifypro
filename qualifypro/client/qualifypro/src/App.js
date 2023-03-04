import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
  LandingPage,
  CourseDetails,
  PrivacyPolicy,
  TermsAndConditions,
  Refund,
  Register,
  PaymentSuccess,
  PaymentCancel
} from './pages'
import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from "./theme/typography";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

function App() {
  const theme = createTheme({
    typography: Typography(`'Montserrat', sans-serif`),
  })
  return (
    <ThemeProvider theme={theme}>
      <Elements stripe={stripePromise}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route index element={<LandingPage />} />
              <Route path='/courses/:courseId' element={<CourseDetails />} />
              <Route path='/register/:courseId' element={<Register />} />
              <Route path='/payment_success' element={<PaymentSuccess />} />
              <Route path='/payment_cancel' element={<PaymentCancel />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
              <Route path='/refund-policy' element={<Refund />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Elements>
    </ThemeProvider>
  );
}

export default App;
