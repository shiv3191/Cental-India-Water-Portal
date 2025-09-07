import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Sliding from "./Components/sliding";
import Category from "./Components/category";
import MPDistricts from "./Components/mpdistricts";
import CGDistricts from "./Components/cgdistricts";
import Footer from "./Components/Footer";
import Indore from "./Disricts_MP/Indore/Indore";
import AM from "./Disricts_MP/AGAR MALWA/am";
import Ali from "./Disricts_MP/Alirajpur/Ali";
import Anu from "./Disricts_MP/Annupur/anu";
import Ashok from "./Disricts_MP/Ashoknagar/Ashok";
import Balaghat from "./Disricts_MP/Balaghat/Balaghat";
import Barwani from "./Disricts_MP/Barwani/Barwani"
import Betul from "./Disricts_MP/Betul/Betul";
import Bhind from "./Disricts_MP/Bhind/Bhind";
import Bhopal from "./Disricts_MP/Bhopal/Bhopal";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <div>
                  <Sliding />
                  <Category />
                </div>
              } 
            />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="/districts/mp" element={<MPDistricts />} />
            <Route path="/districts/cg" element={<CGDistricts />} />
            <Route path="/district/indore" element={<Indore />} />
            <Route path="/district/agar-malwa" element={<AM/>} />
            <Route path="/district/alirajpur" element={<Ali/>} />
            <Route path="/district/anuppur" element={<Anu/>} />
            <Route path="/district/ashoknagar" element={<Ashok/>} />
            <Route path="/district/balaghat" element={<Balaghat/>} />
            <Route path="/district/barwani" element={<Barwani/>} />
            <Route path="/district/betul" element={<Betul/>} />
            <Route path="/district/bhind" element={<Bhind/>} />
            <Route path="/district/bhopal" element={<Bhopal/>} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;