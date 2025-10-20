import React from 'react';
import './shahdol.css';
import Indoreimg from './SHAHDOL1.png';
import Indoreimg1 from './Shahdol2.png';
import Indoreimg2 from './Shahdol3.png';
import picture1 from './shahdol4.png';
import picture2 from './shahdol5.png';

const Shahdol= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Shahdol District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>6215.02 sq.km</strong> and lies in the <strong>Sone basin (Ganga) and Banas basin</strong>.</p>

  <p>• The total population of the district is <strong>8,46,463</strong> out of which the Scheduled Caste population is <strong>2,19,600</strong>.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1200–1500 mm</strong> and <strong>≈34–38 °C & ≈8–12 °C</strong>.</p>

  <p>• District climate: <strong>Tropical monsoon / high rainfall (east MP) — hot humid summers (≈34–38 °C), mild winters (≈8–12 °C), rainfall ≈1200–1500 mm</strong>.</p>

  <p>• The district is drained mainly by the rivers <strong>Sone and Banas</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Bansagar Dam (Sone River)</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Wheat, Maize, Pulses</strong>.</p>
</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Shahdol District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">20.38 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">5.01 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">37.83 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">64.33 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">128.86 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">76.66 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">88.26 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">125.45 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Shahdol District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 2389.66 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '44.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 1531.81 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '28.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 1406.23 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '26.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 48.58 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 180.23 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '3.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 28.61 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 82.76 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '1.5%'}}></div>
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
    <img src={Indoreimg2} alt="LULC Classification Map - Shahdol" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Shahdol;