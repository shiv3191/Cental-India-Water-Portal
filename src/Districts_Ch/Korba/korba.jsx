import React from 'react';
import './korba.css';
import Indoreimg from './KOBRA1.png';
import Indoreimg1 from './Korba2.png';
import Indoreimg2 from './Korba3.png';
import picture1 from './korba4.png';
import picture2 from './korba5.png';

const Korba= () => {
  return (
    <div className='indore-body'>

    <div className="container">
      <div className="header">
        <h1>Korba District</h1>
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
  <p>• The district is having an area <strong>7177.26 sq.km</strong> and lies mainly in the <strong>Hasdeo and Gage river basin</strong>.</p>

  <p>• The rural and urban population of the district are as follows <strong>7,60,350</strong> and <strong>4,46,290</strong> respectively.</p>

  <p>• The mean precipitation, Maximum and Minimum Temperature of the district is 
     <strong>≈1171 mm</strong> and <strong>≈40 °C & ≈11 °C</strong>.</p>

  <p>• District climate: <strong>Plateau climate — hot summers (~40 °C), cool winters (~11 °C), rainfall ≈1171 mm</strong>.</p>

  <p>• The district is drained mainly by the river <strong>Hasdeo and Gage</strong>.</p>

  <p>• District has following major dams and reservoirs: <strong>Hasdeo Bango catchment, Sarpa Barrage</strong>.</p>

  <p>• District observed a <strong>—</strong>.</p>

  <p>• The major crops grown in the district are as follows: <strong>Paddy, Maize, Pulses, Oilseeds</strong>.</p>
</div>

</div>

     </div>
      </div>

      {/* Enhanced Water Analysis Section */}
<div className="district-section">
  <h2 className="section-title">Decadal Water Level Changes</h2>
  <div className="water-analysis-section">
    <img src={Indoreimg1} alt="Water Level Changes Map - Korba" className="water-map-image" />
    <div className="analysis-info">
      <h4 className="analysis-title">Water Area Analysis - Korba District</h4>
      <div className="analysis-description">

        <div className="year-section">
          <div className="year-title">1991</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">91.24 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">58.32 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2001</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">98.08 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">114.88 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2011</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">112.46 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">106.13 km²</span>
            </div>
          </div>
        </div>

        <div className="year-section">
          <div className="year-title">2021</div>
          <div className="water-data">
            <div className="water-item">
              <span className="water-label">Seasonal Water Area:</span>
              <span className="water-value">103.25 km²</span>
            </div>
            <div className="water-item">
              <span className="water-label">Permanent Water Area:</span>
              <span className="water-value">119.12 km²</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Two Simple Photo Cards */}
  <div className="photo-cards-container">
    <div className="photo-card">
      <img src={picture1} alt="Photo 1 - Korba" />
    </div>
    <div className="photo-card">
      <img src={picture2} alt="Photo 2 - Korba" />
    </div>
  </div>
</div>

      {/* LULC Analysis Section */}
<div className="district-section">
  <h2 className="section-title lulc-section-title">Land Use Land Cover Analysis</h2>
  <div className="lulc-analysis-section">
    <div className="lulc-info">
      <h4 className="lulc-title">LULC Distribution - Korba District (2021)</h4>

      <div className="lulc-grid">
        <div className="lulc-category">
          <div className="lulc-category-title tree-cover">Tree Cover - 3500.87 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill tree-cover" style={{width: '48.8%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title shrubland">Shrubland - 11.20 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill shrubland" style={{width: '0.2%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title grassland">Grassland - 1222.68 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill grassland" style={{width: '17.0%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title cropland">Cropland - 1537.20 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill cropland" style={{width: '21.4%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title built-up">Built-up Area - 78.38 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill built-up" style={{width: '1.1%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title bare-vegetation">Bare/Sparse Vegetation - 65.84 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill bare-vegetation" style={{width: '0.9%'}}></div>
          </div>
        </div>

        <div className="lulc-category">
          <div className="lulc-category-title water-bodies">Permanent Water Bodies - 181.62 km²</div>
          <div className="lulc-bar">
            <div className="lulc-fill water-bodies" style={{width: '2.5%'}}></div>
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
    <img src={Indoreimg2} alt="LULC Classification Map - Korba" className="water-map-image" />
  </div>
</div>

 </div>
    </div>
  );
};

export default Korba;