import React from 'react';
import './raigarh.css';
import Indoreimg from './RAIGARH.png';
import Indoreimg1 from './Raigarh2.png';
import Indoreimg2 from './Rajgarh3.png';
import picture1 from './raigarh4.png';
import picture2 from './raigarh5.png';

const Raigarh= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Raigarh District</h1>
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
  <p>• The district is having an area <strong>6024.68 sq.km</strong> and lies mainly in the <strong>Mahanadi and Mand River basin</strong>.</p>

  <p>• The rural and urban population of the district are as follows <strong>12,69,357</strong> and <strong>2,76,457</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1183 mm</strong> and <strong>≈41 °C & ≈11 °C</strong>.</p>

  <p>• District climate: <strong>Sub-humid climate — hot summers (~41 °C), cool winters (~11 °C), rainfall ≈1183 mm</strong>.</p>

  <p>• The district is drained mainly by the <strong>Mahanadi River and Mand River</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Kelo Dam</strong>.</p>

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
    <img src={Indoreimg1} alt="Water Level Changes Map - Raigarh" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Raigarh District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">49.47 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">3.64 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">55.01 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">4.14 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">64.68 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">8.87 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">82.43 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">13.96 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Raigarh" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Raigarh" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Rajgarh (CG) District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 2912.54 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '48.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 2.79 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.05%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 637.92 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '10.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1805.38 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '29.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 79.49 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 44.76 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 67.36 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.01 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Rajgarh (CG)" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Raigarh;