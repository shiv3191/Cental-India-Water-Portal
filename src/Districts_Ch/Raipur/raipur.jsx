import React from 'react';
import './raipur.css';
import Indoreimg from './RAIPUR1.png';
import Indoreimg1 from './Raipur2.png';
import Indoreimg2 from './Raipur3.png';
import picture1 from './raipur4.png';
import picture2 from './raipur5.png';

const Raipur= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Raipur District</h1>
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
  <p>• The district is having an area <strong>3132.71 sq.km</strong> and lies mainly in the <strong>Kharun River and Mahanadi tributaries basin</strong>.</p>

  <p>• The rural and urban population of the district are as follows <strong>25,80,583</strong> and <strong>14,83,289</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1385 mm</strong> and <strong>≈44 °C & ≈12–13 °C</strong>.</p>

  <p>• District climate: <strong>Hot capital plains climate — extreme summers (up to ~44 °C), mild winters (~12–13 °C), rainfall ≈1385 mm</strong>.</p>

  <p>• The district is drained mainly by the <strong>Kharun River and Mahanadi tributaries</strong>.</p>


  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Maize, Oilseeds, Vegetables</strong>.</p>
</div>


</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Raipur" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Raipur District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">52.08 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">5.12 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">56.68 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">3.76 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">77.55 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">10.09 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">89.59 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">14.24 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Raipur" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Raipur" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Raipur District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 146.16 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '5.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 3.74 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 340.10 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '12.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 2099.46 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '74.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 191.34 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '6.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 45.72 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '1.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 77.92 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '2.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.10 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Raipur" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Raipur;