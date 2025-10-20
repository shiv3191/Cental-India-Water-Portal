import React from 'react';
import './rewa.css';
import Indoreimg from './REWA1.png';
import Indoreimg1 from './Rewa2.png';
import Indoreimg2 from './Rewa3.png';
import picture1 from './rewa4.png';
import picture2 from './rewa5.png';

const Rewa= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Rewa District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>4903.43 sq.km</strong> and lies in the <strong>Tons & Bichiya river basins</strong>.</p>

  <p>• The total population of the district is <strong>19,69,321</strong> out of which the Scheduled Tribe population is <strong>3,95,785</strong>.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is <strong>≈1100–1400 mm</strong> and <strong>≈36–40 °C & ≈8–12 °C</strong>.</p>

  <p>• District climate: <strong>Tropical monsoon (eastern highlands) — hot humid summers (≈36–40 °C), mild winters (≈8–12 °C), rainfall ≈1100–1400 mm</strong>.</p>

  <p>• The district is drained mainly by the rivers <strong>Tons and Bichiya</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Govind Ballabh Pant Sagar (Rihand, shared)</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Wheat</strong>.</p>
</div>

        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Rewa District</h4>
      <div className="analysis-description">
        
        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">16.26 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">8.07 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">22.12 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.36 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">34.43 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">7.48 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">33.15 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.48 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Rewa District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 2843.64 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '58.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 714.79 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '14.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 698 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '14.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 91.95 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 27.24 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 12.95 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 43.82 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.1 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Rewa" className="water-map-image" />
  </div>
</div>

    </div>
    </div>
  );
};

export default Rewa;