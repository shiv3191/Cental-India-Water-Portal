import React from 'react';
import './sidhi.css';
import Indoreimg from './SIDHI1.png';
import Indoreimg1 from './Sidhi2.png';
import Indoreimg2 from './Sidhi3.png';
import picture1 from './sidhi4.png';
import picture2 from './sidhi5.png';

const Sidhi= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Sidhi District</h1>
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
  <p>• The district is having an area <strong>5249.64 sq.km</strong> and has following major rivers 
     <strong>Son and Gopad</strong>.</p>
  
  <p>• The rural and urban population of the district are as follows 
     <strong>1,033,912</strong> and <strong>93,121</strong> respectively.</p>
  
  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1100–1400 mm</strong> and <strong>36–40°C & 8–12°C</strong>.</p>
  
  <p>• District climate: <strong>Tropical monsoon (eastern uplands), characterized by hot humid summers, 
     mild winters, and significant seasonal rainfall.</strong></p>
 
  
  <p>• The district lies partly in the <strong>Yamuna sub basin</strong> (75%) and 
     <strong>partly in the Narmada basin</strong> (25%).</p>
  
  <p>• District observed a <strong>drought in 2000-2001</strong> and 
     <strong>excessive rainfall and hail storms in years 1997-1998 and 1998-1999</strong>.</p>
  
  <p>• The major crops grown in the district are as follows: 
     <strong>Paddy, Wheat</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Sidhi" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Sidhi District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">43.36 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">10.58 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">56.70 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">13.62 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">84.93 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">8.47 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">65.47 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">21.62 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Sidhi" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Sidhi" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Sidhi District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1817.56 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '34.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 1924.66 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '36.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 850.22 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '16.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 31.07 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 74.26 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 35.80 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 32.66 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.6%'}}></div>
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
    <img src={Indoreimg2} alt="LULC Classification Map - Sidhi" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Sidhi;