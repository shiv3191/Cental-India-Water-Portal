import React from 'react';
import './Jab.css';
import Indoreimg from './JABALPUR1.png';
import Indoreimg1 from './Jabalpur2.png';
import Indoreimg2 from './Jabalpur3.png';
import picture1 from './jab1.png';
import picture2 from './jab2.png';

const Indore= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Jabalpur District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

         <div className="basic-info">
  <p>• The district is having an area <strong>5569.2594 sq.km</strong> and has following major rivers <strong>Narmada, Hiran</strong></p>
  
  <p>• Major dam/irrigation project in the district: <strong>Bargi (Rani Avanti Bai Sagar) Dam</strong></p>

  <p>• The rural and urban population of the district are as follows <strong>1023255</strong> and <strong>1440034</strong> respectively.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>1100–1500 mm</strong> and <strong>≈36–40 °C & ≈8–12 °C</strong></p>
  
  <p>• District climate: <strong>Tropical humid / high rainfall (upper Vindhya) — hot humid summers (≈36–40 °C), mild winters (≈8–12 °C), rainfall ≈1100–1500 mm</strong></p>
  
  <p>• The district lies partly in the <strong>—</strong> (—%) and <strong>—</strong> (—%).</p>
  
  <p>• District observed a <strong>—</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Paddy, Wheat</strong></p>
</div>

        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
      <div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Jabalpur District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">35.25 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">57.95 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">67.07 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">56.95 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">69.76 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">57.47 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">43.34 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">60.88 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Jabalpur District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 3093.52 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '55.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 967.51 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '17.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 734.55 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '13.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 138.49 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '2.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 83.48 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 18.15 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 58.11 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '1.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.09 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Jabalpur" className="water-map-image" />
  </div>
</div>

    </div>
    </div>
  );
};

export default Indore;