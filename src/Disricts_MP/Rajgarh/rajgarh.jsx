import React from 'react';
import './rajgarh.css';
import Indoreimg from './RAJGARH1.png';
import Indoreimg1 from './Rajgarh2.png';
import Indoreimg2 from './Rajgarh3.png';
import picture1 from './raj1.png';
import picture2 from './raj2.png';

const Rajgarh= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Rajgarh District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>6771.53 sq.km</strong> and lies in the <strong>Kali Sindh & Parbati basins</strong>.</p>
  
  <p>• The total population of the district is <strong>12,69,357</strong> out of which the Scheduled Caste population is <strong>2,76,457</strong>.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>≈700–900 mm</strong> and <strong>≈41–44 °C & ≈8–12 °C</strong></p>
  
  <p>• District climate: <strong>Semi-arid / Malwa–Vindhya fringe — hot summers (≈41–44 °C), cool winters (≈8–12 °C), rainfall ≈700–900 mm</strong></p>
  
  <p>• The district is drained mainly by the rivers <strong>Kali Sindh and Parbati</strong>.</p>
  
  <p>• District has following major dams and reservoirs: <strong>Mohanpura Dam (Newaj River), Kundalia Dam (shared)</strong></p>
  
  <p>• District observed a <strong>—</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Cereals</strong></p>
</div>

        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Rajgarh District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">25.60 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">3.12 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">39.40 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">2.52 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">81.52 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">3.13 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">145.86 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">31.79 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2" />
    </div>
  </div>
</div>


      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Rajgarh District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 4895.84 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '72.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 352.11 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '5.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 669.59 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '9.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 33.11 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 84.83 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 29.04 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 100.25 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Rajgarh" className="water-map-image" />
  </div>
</div>

    </div>
    </div>
  );
};

export default Rajgarh;