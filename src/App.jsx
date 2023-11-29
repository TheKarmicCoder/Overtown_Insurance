// App.js
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from "./pages/Services"
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from "./components/Navbar";
import "./App.css"
const theme = createTheme();

const App = () => {
  return (
    <>
    
    <ThemeProvider theme={theme}>
    <Navbar />
      <CssBaseline />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </ThemeProvider>
    
    </>
    
  );
};

export default App;
