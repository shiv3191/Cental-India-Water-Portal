import React from 'react';
import './seoni.css';
import Indoreimg from './SEONI1.png';
import Indoreimg1 from './Seoni2.png';
import Indoreimg2 from './Seoni3.png';
import picture1 from './seoni4.png';
import picture2 from './seoni5.png';

const Seoni= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Seoni District</h1>
        <p>Water Resource Monitoring Portal</p>
      </div>

      {/* District Overview Section */}
      <div className="district-section">
        <h2 className="section-title">District Overview</h2>
        <div className="district-overview">
          <img src={Indoreimg} alt="Indore District Location Map" className="district-image" />

<div className="basic-info">
  <p>• The district is having an area <strong>9505.93 sq.km</strong> and lies in the <strong>Wainganga (Godavari basin) and Pench basin</strong>.</p>

  <p>• The total population of the district is <strong>12,15,241</strong> out of which the Scheduled Caste population is <strong>1,63,890</strong>.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1200–1500 mm</strong> and <strong>≈34–38 °C & ≈8–12 °C</strong>.</p>

  <p>• District climate: <strong>Tropical humid (southern plateaux) — hot humid summers (≈34–38 °C), mild winters (≈8–12 °C), rainfall ≈1200–1500 mm</strong>.</p>

  <p>• The district is drained mainly by the rivers <strong>Wainganga and Pench</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Bheemgarh (Sanjay Sarovar) Dam (Wainganga)</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Wheat, Maize</strong>.</p>
</div>
     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Seoni District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">82.56 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">63.15 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">105.97 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">64.81 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">142.84 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">68.23 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">145.20 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">76.37 km²</span>
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
      <h4 className="lulc-title">LULC Distribution - Seoni District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 4212.60 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '44.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 2206.66 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '23.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 1978.46 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '20.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 88.60 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '0.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 150.09 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 19.38 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 96.00 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '1.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.04 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Seoni" className="water-map-image" />
  </div>
</div>
 </div>
    </div>
  );
};

export default Seoni;