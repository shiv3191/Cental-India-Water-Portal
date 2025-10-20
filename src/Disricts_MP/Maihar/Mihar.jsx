import React from 'react';
import './maihar.css';
import Indoreimg from './MAIHAR1.png';
import Indoreimg1 from './Maihar2.png';
import Indoreimg2 from './Maihar3.png';
import picture1 from './mh1.png';
import picture2 from './mh2.png';

const Maihar= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Maihar District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>2462.1111 sq.km</strong> and has following major rivers <strong>Tamas, Satna</strong></p>
  
  <p>• The rural and urban population of the district are as follows <strong>318533</strong> and <strong>40192</strong> respectively.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>900–1100 mm</strong> and <strong>≈40–44 °C & ≈6–10 °C</strong></p>
  
  <p>• District climate: <strong>Subtropical (Satna plateau) — hot summers (≈40–44 °C), cool winters (≈6–10 °C), rainfall ≈900–1100 mm</strong></p>
  
  <p>• The district lies partly in the <strong>—</strong> (—%) and <strong>—</strong> (—%).</p>
  
  <p>• District observed a <strong>—</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Paddy, Wheat, Pulses</strong></p>
</div>

        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Maihar District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">6.83 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">2.84 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">32.86 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">82.12 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">151.94 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">97.33 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">85.04 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">157.24 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Maihar District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1174.23 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '47.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 311.14 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '12.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 421.78 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '17.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 36.22 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 188.49 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '7.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 10.4 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 93.26 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '3.8%'}}></div>
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
    <img src={Indoreimg2} alt="LULC Classification Map - Maihar" className="water-map-image" />
  </div>
</div>

    </div>
    </div>
  );
};

export default Maihar;