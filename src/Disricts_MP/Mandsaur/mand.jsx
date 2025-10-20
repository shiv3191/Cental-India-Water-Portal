import React from 'react';
import './mand.css';
import Indoreimg from './MANDSAUR1.png';
import Indoreimg1 from './Mandsaur2.png';
import Indoreimg2 from './Mandsaur3.png';
import picture1 from './mand1.png';
import picture2 from './mand2.png';

const Mandsaur= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Mandsaur District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>6118.1352 sq.km</strong> and lies in the <strong>Chambal tributary zone</strong></p>
  
  <p>• The rural and urban population of the district are as follows <strong>1062807</strong> and <strong>277604</strong> respectively.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>600–800 mm</strong> and <strong>≈42–45 °C & ≈8–12 °C</strong></p>
  
  <p>• District climate: <strong>Semi-arid (Malwa) — hot summers (≈42–45 °C), cool winters (≈8–12 °C), rainfall ≈600–800 mm</strong></p>
  
  <p>• The district lies partly in the <strong>—</strong> (—%) and <strong>—</strong> (—%).</p>
  
  <p>• District observed a <strong>—</strong>.</p>
  
  <p>• District has following major dams and reservoirs are <strong>Gandhi Sagar Dam</strong></p>
  
  <p>• The major crops grown in the district are as follows: <strong>Pulses, Soybean, Wheat</strong></p>
</div>

        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Mandsaur District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">157.83 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">237.08 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">72.49 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">106.03 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">347.83 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">80.89 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">250.93 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">265.07 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Mandsaur District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 3757.45 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '61.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 262.7 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '4.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 930.11 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '15.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 119.23 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 349.2 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '5.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 44.78 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 91.94 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '1.5%'}}></div>
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
    <img src={Indoreimg2} alt="LULC Classification Map - Mandsaur" className="water-map-image" />
  </div>
</div>

    </div>
    </div>
  );
};

export default Mandsaur;