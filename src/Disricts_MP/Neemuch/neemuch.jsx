import React from 'react';
import './neemuch.css';
import Indoreimg from './NEEMUCH1.png';
import Indoreimg1 from './Neemuch2.png';
import Indoreimg2 from './Neemuch3.png';
import picture1 from './neem1.png';
import picture2 from './neem2.png';

const Neemuch= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Neemuch District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>4733.30 sq.km</strong> and lies in the <strong>Kali Sindh & Chambal catchment</strong></p>
  
  <p>• The total population of the district is <strong>5,80,837</strong> out of which the rural population is <strong>2,45,230</strong>.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>≈650–850 mm</strong> and <strong>≈42–45 °C & ≈6–10 °C</strong></p>
  
  <p>• District has following major dams and reservoirs: <strong>Sukhanand Sagar (Kenpuriya) Dam</strong></p>
  <p>• District climate: <strong>Semi-arid (Malwa plateau) — hot summers (≈42–45 °C), cool winters (≈6–10 °C), rainfall ≈650–850 mm</strong></p>
  
  <p>• The district lies partly in the <strong>—</strong> (—%) and <strong>—</strong> (—%).</p>
  
  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Cereals, Soybean, Opium</strong></p>

</div>

        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Neemuch District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">72.13 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">160.36 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">53.46 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">64.22 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">223.64 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">45.93 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">113.08 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">181.15 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Neemuch District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 2034.47 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '43.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 229.42 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '4.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 1400.12 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '29.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 76.11 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 206.01 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '4.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 14.85 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 324.09 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '6.9%'}}></div>
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
    <img src={Indoreimg2} alt="LULC Classification Map - Neemuch" className="water-map-image" />
  </div>
</div>

    </div>
    </div>
  );
};

export default Neemuch;