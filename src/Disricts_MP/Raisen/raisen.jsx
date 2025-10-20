import React from 'react';
import './raisen.css';
import Indoreimg from './RAISEN1.png';
import Indoreimg1 from './Raisen2.png';
import Indoreimg2 from './Raisen3.png';
import picture1 from './rais1.png';
import picture2 from './rais2.png';

const Raisen= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Raisen District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>9269.36 sq.km</strong> and lies in the <strong>Betwa & Narmada basins</strong>.</p>
  
  <p>• The total population of the district is <strong>10,28,172</strong> out of which the Scheduled Caste population is <strong>3,03,425</strong>.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>≈900–1100 mm</strong> and <strong>≈40–44 °C & ≈8–12 °C</strong></p>
  
  <p>• District climate: <strong>Subtropical monsoon — hot summers (≈40–44 °C), cool winters (≈8–12 °C), rainfall ≈900–1100 mm</strong></p>
  
  <p>• The district is drained mainly by the rivers <strong>Betwa and Narmada</strong>.</p>
  
  <p>• District has following major dams and reservoirs: <strong>Barna Dam, Halali Dam (Samrat Ashok Sagar)</strong></p>
  
  <p>• District observed a <strong>—</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Wheat, Soybean, Maize, Gram</strong></p>
</div>

        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Raisen District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">50.79 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">45.83 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">59.25 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">43.88 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">101.87 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">33.53 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">104.47 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">50.22 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Raisen District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 4858.20 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '52.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 1527.41 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '16.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 1621.02 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '17.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 272.83 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '2.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 81.12 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 17.67 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 100.82 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.04 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Raisen" className="water-map-image" />
  </div>
</div>

    </div>
    </div>
  );
};

export default Raisen;