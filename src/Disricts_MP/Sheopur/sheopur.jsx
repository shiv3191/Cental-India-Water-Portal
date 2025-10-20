import React from 'react';
import './sheopur.css';
import Indoreimg from './SHEOPUR1.png';
import Indoreimg1 from './Sheopur2.png';
import Indoreimg2 from './Sheopur3.png';
import picture1 from './sheopur4.png';
import picture2 from './sheopur5.png';

const Sheopur= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Sheopur District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>7371.42 sq.km</strong> and lies in the <strong>Kali Sindh–Chambal fringe</strong>.</p>

  <p>• The total population of the district is <strong>5,80,509</strong> out of which the Scheduled Caste population is <strong>1,07,352</strong>.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈800–1000 mm</strong> and <strong>≈40–44 °C & ≈8–12 °C</strong>.</p>

  <p>• District climate: <strong>Subtropical monsoon — hot summers (≈40–44 °C), cool winters (≈8–12 °C), rainfall ≈800–1000 mm</strong>.</p>

  <p>• The district is drained mainly by the rivers <strong>Kali Sindh and Chambal</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Kuno Dam (Kuno River)</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Oilseeds</strong>.</p>
</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Sheopur" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Sheopur District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">31.06 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">17.25 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">36.93 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">15.77 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">57.49 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">11.78 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">73.30 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">16.44 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Sheopur" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Sheopur" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Sheopur District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 2290.68 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '31.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 936.6 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '12.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 2437.31 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '33.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 833.26 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '11.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 33.6 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 28.52 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 51.03 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.36 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Sheopur" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Sheopur;