import React from 'react';
import './datia.css';
import AM from './DATIA1.png';
import AM1 from './Datia2.png';
import AM2 from './Datia3.png';
import picture1 from './dt1.png';
import picture2 from './dt2.png';

const Betul= () => {
  return (
    <div className='ali-body'>

    <div className="container">
      <div className="header">
        <h1>Datia District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={AM} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>3381.8076 sq.km</strong> and has following major rivers <strong>Sindh, Pahuj</strong></p>
  
  <p>• The rural and urban population of the district are as follows <strong>604772</strong> and <strong>181982</strong> respectively.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>700–900 mm</strong> and <strong>≈42–45 °C & ≈6–10 °C</strong></p>
  
  <p>• District climate: <strong>Semi-arid (northern plains) — very hot summers (≈42–45 °C), cool winters (≈6–10 °C), rainfall ≈700–900 mm</strong></p>
  
  <p>• District has following major dams and reservoirs are <strong>Pahuj Dam</strong></p>
  
  <p>• The district lies partly in the <strong>—</strong> (—%) and <strong>—</strong> (—%).</p>
  
  <p>• District observed a <strong>—</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Wheat, Gram, Mustard, Jowar</strong></p>
</div>

</div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={AM1} alt="Water Level Changes Map - Datia" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Datia District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">17.487 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">10.6101 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">27.8784 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.5544 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">36.7758 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.6768 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">42.6969 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.0234 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Datia District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 2348.8 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '77.47%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 187.77 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '6.19%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 335.61 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '11.07%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 49.12 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.62%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 28.07 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.93%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 10.46 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.34%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 72.3 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '2.38%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.4 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.013%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={AM2} alt="LULC Classification Map - Datia" className="water-map-image" />
  </div>
</div>

    </div>
    </div>
  );
};

export default Betul;