import React from 'react';
import './ch.css';
import AM from './CHHATARPUR1.png';
import AM1 from './Chhatarpur2.png';
import AM2 from './Chhatarpur3.png';
import picture1 from './ch1.png';
import picture2 from './ch2.png';

const Betul= () => {
  return (
    <div className='ali-body'>

    <div className="container">
      <div className="header">
        <h1>Chhatarpur District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={AM} alt="Indore District Location Map" className="district-image" />

     <div className="basic-info">
  <p>• The district is having an area <strong>9628.2783 sq.km</strong> and has following major rivers <strong>Ken, Simiri</strong></p>
  
  <p>• The rural and urban population of the district are as follows <strong>399016</strong> and <strong>1363359</strong> respectively.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>≈700–900 mm</strong> and <strong>≈42–45 °C & ≈6–10 °C</strong></p>
  
  <p>• District climate: <strong>Semi-arid / Bundelkhand fringe — hot summers (≈42–45 °C), cool winters (≈6–10 °C), rainfall ≈700–900 mm</strong></p>
  
  <p>• District has following major dams and reservoirs are <strong>Gangau Dam, Daudhan Dam</strong></p>
  
  <p>• The district lies partly in the <strong>—</strong> basin (—%) and <strong>—</strong> basin (—%).</p>
  
  <p>• District observed a <strong>—</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: <strong>Pigeon pea, Gram</strong></p>
</div>


</div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={AM1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Chhatarpur District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">59.031 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">13.635 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">88.6518 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">14.2497 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">120.492 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">13.5567 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">107.6265 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">24.4125 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Chhatarpur District (2021)</h4>
      
      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 5582.83 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '58.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 991.05 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '10.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 1646.33 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '17.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 105.3 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 79.87 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 22.64 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 273.84 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '2.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.52 km²</div>
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