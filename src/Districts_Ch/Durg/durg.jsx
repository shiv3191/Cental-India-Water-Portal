import React from 'react';
import './durg.css';
import Indoreimg from './DURG1.png';
import Indoreimg1 from './Durg2.png';
import Indoreimg2 from './Durg3.png';
import picture1 from './durg4.png';
import picture2 from './durg5.png';

const Durg= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Durg District</h1>
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
  <p>• The district is having an area <strong>2476.88 sq.km</strong> and lies mainly in the <strong>Seonath River and Kharun River basin</strong>.</p>

  <p>• The total population of the district is <strong>20,59,107</strong> out of which the Scheduled Caste population is <strong>12,84,765</strong>.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1123 mm</strong> and <strong>≈45 °C & ≈13 °C</strong>.</p>

  <p>• District climate: <strong>Semi-arid plains climate — scorching summers (up to 45 °C), mild winters (~13 °C), rainfall ≈1123 mm</strong>.</p>

  <p>• The district is drained mainly by the river <strong>Seonath and Kharun</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Tandula Canals, Kharkhara Feeders</strong>.</p>

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
    <img src={Indoreimg1} alt="Water Level Changes Map - Durg" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Durg District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">32.79 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">9.57 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">34.49 km²</span>
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
              <span className="water-value">46.65 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">14.20 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">49.88 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">14.84 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Durg" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Durg" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Durg District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1689.40 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '68.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 139.79 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '5.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 243.16 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '9.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 154.09 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '6.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 48.08 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '1.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 22.33 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 0.62 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.02%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.09 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.00%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Durg" className="water-map-image" />
  </div>
</div>


 </div>
    </div>
  );
};

export default Durg;