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
import Burhanpur from "./Disricts_MP/Burhanpur/bh";
import Chhatarpur from "./Disricts_MP/Chhatarpur/ch";
import Chhindwara from "./Disricts_MP/Chhindwara/chh";
import Damoh from "./Disricts_MP/Damoh/Damoh";
import Datia from "./Disricts_MP/Datia/datia";
import Dewas from "./Disricts_MP/Dewas/dewas";
import Dhar from "./Disricts_MP/Dhar/Dhar";
import Dindori from "./Disricts_MP/Dindori/din";
import Guna from "./Disricts_MP/Guna/guna";
import Gwalior from "./Disricts_MP/Gwalior/gwalior";
import Harda  from "./Disricts_MP/Harda/harda";
import Jabalpur from "./Disricts_MP/Jabalpur/Jabalpur";
import Jhabua from "./Disricts_MP/Jhabua/Jhabua";
import Katni from "./Disricts_MP/Katni/katni";
import Khandwa from "./Disricts_MP/Khandwa/Khandwa";
import Khargone from "./Disricts_MP/Khargone/khargone";
import Maihar from "./Disricts_MP/Maihar/Mihar";
import Mandla from "./Disricts_MP/Mandla/Mandla";
import Mandsaur from "./Disricts_MP/Mandsaur/mand";
import Mauganj from "./Disricts_MP/Mauganj/mau";
import Morena from "./Disricts_MP/Morena/morena";
import Narmadapuram from "./Disricts_MP/Narmadapuram/naramada";
import Narsinghpur from "./Disricts_MP/Narsinghpur/nars";
import Neemuch from "./Disricts_MP/Neemuch/neemuch";
import Niwari from "./Disricts_MP/Niwari/niwari";
import Pandhurna from "./Disricts_MP/Pandhurna/pand";
import Panna from "./Disricts_MP/Panna/panna";
import Raisen from "./Disricts_MP/Raisen/raisen";
import Rajgarh from "./Disricts_MP/Rajgarh/rajgarh";
import Ratlam from "./Disricts_MP/Ratlam/ratlam";
import Rewa from "./Disricts_MP/Rewa/rewa";
import Sagar from "./Disricts_MP/Sagar/sagar";
import Satna from "./Disricts_MP/Satna/satna";
import Sehore from "./Disricts_MP/Sehore/sehore";
import Seoni from "./Disricts_MP/Seoni/seoni";
import Shahdol from "./Disricts_MP/Shahdol/shahdol";
import Shajapur from "./Disricts_MP/Shajapur/shajapur";
import Sheopur from "./Disricts_MP/Sheopur/sheopur";
import Shivpuri from "./Disricts_MP/Shivpuri/shivpuri";
import Sidhi from "./Disricts_MP/Sidhi/sidhi";
import Singrauli from "./Disricts_MP/Singrauli/singrauli";
import Tikamgarh from "./Disricts_MP/Tikamgarh/tikam";
import Ujjain from "./Disricts_MP/Ujjain/ujjain";
import Umaria from "./Disricts_MP/Umaria/umaria";
import Vidisha from "./Disricts_MP/Vidisha/vidisha";
import Balod from "./Districts_Ch/Balod/Balod";
import Baloda from "./Districts_Ch/Baloda Bazar/baloda";
import Balrampur from "./Districts_Ch/Balrampur/balram";
import Bastar from "./Districts_Ch/Bastar/bastar";
import Bemetara from "./Districts_Ch/Bemetara/bemetara";
import Bijapur from "./Districts_Ch/Bijapur/bijapur";
import Bilaspur from "./Districts_Ch/Bilaspur/bilaspur";
import DakshinBastarDantewara from "./Districts_Ch/Dakshin Bastar Dantewara/dbd";
import Dhamtari from "./Districts_Ch/Dhamtari/dhamtari";
import Durg from "./Districts_Ch/Durg/durg";
import Gariyaband from "./Districts_Ch/Gariyaband/gariyaband";
import GaurelaPendraMarwahi from "./Districts_Ch/Gaurela Pendra Marwahi/gaurela";
import Janjgir from "./Districts_Ch/Janjgir/janjgir";
import Jashpur from "./Districts_Ch/Jashpur/jashpur";
import Kawardha from "./Districts_Ch/Kawardha/kawardha";
import Khairgarh from "./Districts_Ch/Khairgarh Chhuikhadan Gandai/khairgarh";
import Kondagaon from "./Districts_Ch/Kondagaon/kondagaon";
import Korba from "./Districts_Ch/Korba/korba";
import Korea from "./Districts_Ch/Korea/korea";
import Mahasamund from "./Districts_Ch/Mahasamund/maha";
import Manendra from "./Districts_Ch/Manenedragarh Chirmiri Bharatpur/manendra";
import Mohla from "./Districts_Ch/Mohla Manpur Ambargarh Chowki/mohla";
import Mungeli from "./Districts_Ch/Mungeli/mungeli";
import Narayanpur from "./Districts_Ch/Narayanpur/narayanpur";
import Raigarh from "./Districts_Ch/Raigarh/raigarh";
import Raipur from "./Districts_Ch/Raipur/raipur";
import Rajnandgaon from "./Districts_Ch/Rajnandgaon/raj";
import Sakti from "./Districts_Ch/Sakti/sakti";
import Sarangarh from "./Districts_Ch/Sarangarh Bilaigarh/sarangarh";
import Sukma from "./Districts_Ch/Sukma/sukma";
import Surajpur from "./Districts_Ch/Surajpur/surajpur";
import Surguja from "./Districts_Ch/Surguja/surguja";
import Uttar from "./Districts_Ch/Uttar Bastar Kanker/uttar";

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
            <Route path="/district/burhanpur" element={<Burhanpur/>} />
            <Route path="/district/chhatarpur" element={<Chhatarpur/>} />
            <Route path="/district/chhindwara" element={<Chhindwara/>} />
            <Route path="/district/damoh" element={<Damoh/>} />
            <Route path="/district/datia" element={<Datia/>} />
            <Route path="/district/dewas" element={<Dewas/>} />
            <Route path="/district/dhar" element={<Dhar/>} />
            <Route path="/district/dindori" element={<Dindori/>} />
            <Route path="/district/guna" element={<Guna/>} />
            <Route path="/district/guwalior" element={<Gwalior/>} />
            <Route path="/district/harda" element={<Harda/>} />
            <Route path="/district/jabalpur" element={<Jabalpur/>} />
            <Route path="/district/jhabua" element={<Jhabua/>} />
            <Route path="/district/katni" element={<Katni/>} />
            <Route path="/district/khandwa" element={<Khandwa/>} />
            <Route path="/district/khargone" element={<Khargone/>} />
            <Route path="/district/maihar" element={<Maihar/>} />
            <Route path="/district/mandla" element={<Mandla/>} />
            <Route path="/district/mandsaur" element={<Mandsaur/>} />
            <Route path="/district/mauganj" element={<Mauganj/>} />
            <Route path="/district/morena" element={<Morena/>} />
            <Route path="/district/narmadapuram" element={<Narmadapuram/>} />
            <Route path="/district/narsinghpur" element={<Narsinghpur/>} />
            <Route path="/district/neemuch" element={<Neemuch/>} />
            <Route path="/district/niwari" element={<Niwari/>} />
            <Route path="/district/pandhurna" element={<Pandhurna/>} />
            <Route path="/district/panna" element={<Panna/>} />
            <Route path="/district/raisen" element={<Raisen />} />
            <Route path="/district/rajgarh" element={<Rajgarh />} />
            <Route path="/district/ratlam" element={<Ratlam />} />
            <Route path="/district/rewa" element={<Rewa />} />
            <Route path="/district/Sagar" element={<Sagar />} />
            <Route path="/district/Satna" element={<Satna />} />
            <Route path="/district/Sehore" element={<Sehore />} />
            <Route path="/district/Seoni" element={<Seoni />} />
            <Route path="/district/Shahdol" element={<Shahdol />} />
            <Route path="/district/Shajapur" element={<Shajapur />} />
            <Route path="/district/Sheopur" element={<Sheopur />} />
            <Route path="/district/Shivpuri" element={<Shivpuri />} />
            <Route path="/district/Sidhi" element={<Sidhi />} />
            <Route path="/district/Singrauli" element={<Singrauli />} />
            <Route path="/district/Tikamgarh" element={<Tikamgarh />} />
            <Route path="/district/Ujjain" element={<Ujjain />} />
            <Route path="/district/Umaria" element={<Umaria />} />
            <Route path="/district/Vidisha" element={<Vidisha />} />
            <Route path="/district/balod" element={<Balod />} />
            <Route path="/district/baloda-bazar" element={<Baloda />} />
            <Route path="/district/balrampur" element={<Balrampur />} />
            <Route path="/district/bastar" element={<Bastar />} />
            <Route path="/district/bemetara" element={<Bemetara />} />
            <Route path="/district/bijapur" element={<Bijapur />} />
            <Route path="/district/bilaspur" element={<Bilaspur />} />
            <Route path="/district/dakshin-bastar-dantewara" element={<DakshinBastarDantewara />} />
            <Route path="/district/dhamtari" element={<Dhamtari />} />
            <Route path="/district/durg" element={<Durg />} />
            <Route path="/district/gariyaband" element={<Gariyaband />} />
            <Route path="/district/gaurela-pendra-marwahi" element={<GaurelaPendraMarwahi />} />
            <Route path="/district/janjgir" element={<Janjgir />} />
            <Route path="/district/jashpur" element={<Jashpur />} />
            <Route path="/district/kawardha" element={<Kawardha />} />
            <Route path="/district/khairgarh-chhuikhadan-gandai" element={<Khairgarh />} />
            <Route path="/district/kondagaon" element={<Kondagaon />} />
            <Route path="/district/korba" element={<Korba />} />
            <Route path="/district/korea" element={<Korea />} />
            <Route path="/district/mahasamund" element={<Mahasamund />} />
            <Route path="/district/manendragarh-chirmiri-bharatpur" element={<Manendra />} />
            <Route path="/district/mohla-manpur-ambargarh-chowki" element={<Mohla />} />
            <Route path="/district/mungeli" element={<Mungeli />} />
            <Route path="/district/narayanpur" element={<Narayanpur />} />
            <Route path="/district/raigarh" element={<Raigarh />} />
            <Route path="/district/raipur" element={<Raipur />} />
            <Route path="/district/rajnandgaon" element={<Rajnandgaon />} />
            <Route path="/district/sakti" element={<Sakti />} />
            <Route path="/district/sarangarh-bilaigarh" element={<Sarangarh />} />
            <Route path="/district/sukma" element={<Sukma />} />
            <Route path="/district/surajpur" element={<Surajpur />} />
            <Route path="/district/surguja" element={<Surguja />} />
            <Route path="/district/uttar-bastar-kanker" element={<Uttar />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;