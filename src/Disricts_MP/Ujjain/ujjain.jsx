import React from 'react';
import './ujjain.css';
import Indoreimg from './UJJAIN1.png';
import Indoreimg1 from './Ujjain2.png';
import Indoreimg2 from './Ujjain3.png';
import picture1 from './ujjain4.png';
import picture2 from './ujjain5.png';

const Ujjain= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Ujjain District</h1>
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
  <p>• The district is having an area <strong>6675.03 sq.km</strong> and lies in the <strong>Malwa Plateau</strong> region.</p>

  <p>• The total population of the district is <strong>12,07,651</strong> out of which the Scheduled Caste population is <strong>7,79,213</strong>.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈700–900 mm</strong> and <strong>≈42–45 °C & ≈8–12 °C</strong>.</p>

  <p>• District climate: <strong>Semi-arid (Malwa Plateau) — very hot summers (≈42–45 °C), cool winters (≈8–12 °C), rainfall ≈700–900 mm</strong>.</p>

  <p>• The district is drained mainly by the rivers <strong>Kshipra (Shipra) and Gambhir</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Gambhir Dam (Badnagar)</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Soybean, Wheat, Maize, Gram, Vegetables</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Ujjain" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Ujjain District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">40.57 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">3.23 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">16.30 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">2.59 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">57.89 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">2.86 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">73.04 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">2.80 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Ujjain" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Ujjain" />
    </div>
  </div>
</div>


      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Ujjain District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 5309.20 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '79.6%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 262.90 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '3.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 324.15 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '4.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 152.32 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '2.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 30.11 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '0.5%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 17.90 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.3%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 4.42 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.07%'}}></div>
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
    <img src={Indoreimg2} alt="LULC Classification Map - Ujjain" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Ujjain;