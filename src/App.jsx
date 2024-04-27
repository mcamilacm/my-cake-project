import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/Contact";



function App() {
  return (

      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </>
   
  );
}

export default App;