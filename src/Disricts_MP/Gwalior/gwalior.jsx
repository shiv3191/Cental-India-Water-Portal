import React from 'react';
import './gwa.css';
import AM from './GWALIOR1.png';
import AM1 from './Gwalior2.png';
import AM2 from './Gwalior3.png';
import picture1 from './gwa1.png';
import picture2 from './gwa2.png';

const Betul= () => {
  return (
    <div className='ali-body'>

    <div className="container">
      <div className="header">
        <h1>Gwalior District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={AM} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>5076.4158 sq.km</strong> and has following major rivers <strong>Sank (Sank-Asan project)</strong></p>
  
  <p>• The district has major dam/reservoir structures as follows: <strong>Tigra (Tighra) Dam (on Sank river)</strong></p>
  
  <p>• The rural and urban population of the district are as follows <strong>758244</strong> and <strong>1273792</strong> respectively.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>650–850 mm</strong> and <strong>≈44–46 °C & ≈6–10 °C</strong></p>
  
  <p>• District climate: <strong>Semi-arid (northern plains) — very hot summers (≈44–46 °C), cold winters (≈6–10 °C), rainfall ≈650–850 mm</strong></p>
  
  <p>• The district lies partly in the <strong>—</strong> (—%) and <strong>—</strong> (—%).</p>
  
  <p>• District observed a <strong>—</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Mustard, Oilseeds</strong></p>
</div>

</div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={AM1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Gwalior District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">31.0626 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">21.6612 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">35.8452 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">14.5773 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">46.3779 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">21.2121 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">47.9088 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">24.579 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Gwalior District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 2439.47 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '48.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 320.43 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '6.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 1288.92 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '25.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 122.68 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '2.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 44.06 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 20.67 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 305.59 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '6.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.42 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.01%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={AM2} alt="LULC Classification Map" className="water-map-image" />
  </div>
</div>


    </div>
    </div>
  );
};

export default Betul;