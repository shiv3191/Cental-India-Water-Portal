import React from 'react';
import './manendra.css';
import Indoreimg from './MANENDRAGARH CHIRMIRI BHARATPUR1.png';
import Indoreimg1 from './Manendra Chirmiri Bharatpur2.png';
import Indoreimg2 from './Manendragarh Chirmiri Bharatpur3.png';
import picture1 from './manendra4.png';
import picture2 from './manendra5.png';

const Manendra= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Manendra District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="district-section">
  <h2 className="section-title">Basic District Information</h2>
<div className="basic-info">
  <p>• The district is having an area <strong>4521.08 sq.km</strong> and lies mainly in the <strong>Mand and Gopad river basin</strong>.</p>

  <p>• The rural and urban population of the district are as follows <strong>2,78,698</strong> and <strong>1,32,792</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1180 mm</strong> and <strong>≈36 °C & ≈7 °C</strong>.</p>

  <p>• District climate: <strong>Plateau climate — cool summers (~36 °C), cold winters (~7 °C), rainfall ≈1180 mm</strong>.</p>

  <p>• The district is drained mainly by the rivers <strong>Mand and Gopad</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Hasdeo tributary anicuts</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Maize, Pulses</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Manendragarh-Chirmiri-Bharatpur" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Manendragarh Chirmiri Bharatpur District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">5.30 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">0.65 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">6.14 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">1.67 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">8.10 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">1.59 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">15.34 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">1.40 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Manendragarh-Chirmiri-Bharatpur" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Manendragarh-Chirmiri-Bharatpur" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Manendragarh Chirmiri Bharatpur District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 2268.63 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '50.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 7.27 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 1049.14 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '23.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 753.23 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '16.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 10.65 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 18.67 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 19.33 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Manendragarh-Chirmiri-Bharatpur" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Manendra;