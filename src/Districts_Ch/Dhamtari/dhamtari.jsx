import React from 'react';
import './dhamtari.css';
import Indoreimg from './DHAMTARI1.png';
import Indoreimg1 from './Dhamtari2.png';
import Indoreimg2 from './Dhamtari3.png';
import picture1 from './dham1.png';
import picture2 from './dham2.png';

const Dhamtari= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Dhamtari District</h1>
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
  <p>• The district is having an area <strong>4386.73 sq.km</strong> and lies mainly in the <strong>Mahanadi River and Pairi River basin</strong>.</p>

  <p>• The total population of the district is <strong>6,50,586</strong> out of which the Scheduled Caste population is <strong>1,49,195</strong>.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1054 mm</strong> and <strong>≈42 °C & ≈11 °C</strong>.</p>

  <p>• District climate: <strong>Sub-humid climate — hot summers (41–42 °C), mild winters (~11 °C), rainfall ≈1054 mm</strong>.</p>

  <p>• The district is drained mainly by the river <strong>Mahanadi and Pairi</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Ravishankar Sagar Dam (Gangrel Dam), Sondur Dam</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Maize, Vegetables</strong>.</p>
</div>


</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Dhamtari" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Dhamtari District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">70.29 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">82.18 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">72.52 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">93.44 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">95.32 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">93.55 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">94.78 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">93.05 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Dhamtari" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Dhamtari" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Dhamtari District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1579.21 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '36.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 1752.11 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '39.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 432.43 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '9.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 63.14 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 140.55 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '3.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 29.27 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.7%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 89.81 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '2.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title wetland">Herbaceous Wetland - 0.13 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill wetland" style={{width: '0.0%'}}></div>
          </div>
        </div>
      </div>
    </div>
    <img src={Indoreimg2} alt="LULC Classification Map - Dhamtari" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Dhamtari;