import React from 'react';
import './satna.css';
import Indoreimg from './SATNA1.png';
import Indoreimg1 from './Satna2.png';
import Indoreimg2 from './Satna3.png';
import picture1 from './satna4.png';
import picture2 from './satna5.png';

const Satna= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Satna District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>5844.26 sq.km</strong> and lies in the <strong>Tons/Son zone (Bansagar command area)</strong>.</p>

  <p>• The total population of the district is <strong>17,54,517</strong> out of which the Scheduled Caste population is <strong>4,74,418</strong>.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1000–1300 mm</strong> and <strong>≈38–42 °C & ≈8–12 °C</strong>.</p>

  <p>• District climate: <strong>Tropical monsoon (eastern MP) — hot summers (≈38–42 °C), mild winters (≈8–12 °C), rainfall ≈1000–1300 mm</strong>.</p>

  <p>• The district is drained mainly by the river <strong>Tons/Son</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Bansagar command area</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Wheat, Pulses</strong>.</p>
</div>

        </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Satna District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">18.96 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">2.65 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">54.91 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">5.07 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">67.94 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">3.12 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">61.34 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">5.20 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Satna District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 3159.8 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '54.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 839.2 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '14.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 974.53 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '16.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 86.67 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 26.28 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 16.88 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 184.4 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '3.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.07 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Satna" className="water-map-image" />
  </div>
</div>

    </div>
    </div>
  );
};

export default Satna;